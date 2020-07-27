import React from 'react'
import intl from '@gem-mine/intl'
import { useForm } from 'react-hook-form'
import { actions } from '@gem-mine/durex'

// ====== Constants ====== //
import REQUEST_STATUS_CODE from '../../constant/requestConstant'
import { DEFAULT_CONFIG } from '../../constant/commonConstant'

// ====== Util====== //
import * as apiUtil from '../../util/apiUtil'
import * as commonUtil from '../../util/commonUtil'
import * as adapterUtil from '../../util/adapterUtil'

type Forms = {
  username: string;
  password: string;
}

function Login(): JSX.Element {
  const { register, handleSubmit, formState, errors, setError } = useForm<Forms>({
    criteriaMode: 'all'
  })
  const { isSubmitting } = formState
  /**
   * 点击登录
   */
  const handleLoginIn = (data: Forms): void => {
    // 后台验证
    apiUtil.fetchLoginIn({
      userName: data.username,
      password: data.password
    }).then(response => {
      if (response) {
        const _code = response.data.meta.code
        // 验证不通过时
        if (_code === REQUEST_STATUS_CODE.LOGIN_INFO_ERROR) {
          const errorMsg = intl.get('LOGIN_PAGE_MEG_USERNAME_OR_PASSWORD_ERROR')
          setError('username', {
            type: 'textError',
            message: errorMsg
          })
        }
        // 验证通过时
        else if (_code === REQUEST_STATUS_CODE.REQUEST_SUCCESS) {
          const _data = response.data.datas
          const _currentUser = adapterUtil.currentUserAdapter(_data)
          // 1. 存储用户信息 => localStorage
          commonUtil.setCurrentUserToLocalstorage(_currentUser)

          // 2. 存储用户信息 => store
          actions.main.updateCurrentUser(_currentUser)

          // 3. 跳转到前一个页面或home页 todo：如何跳转前一个页面
          actions.router.push(DEFAULT_CONFIG.PAGE)
        }
      }
    })
  }

  return (
    <div className="layout-mod mod-login">
      <div className="layout-wrapper">
        <form onSubmit={handleSubmit(handleLoginIn)}>
          <div className="formbox">
            {/* 标题 */}
            <div className="form-title">{intl.get('LOGIN_PAGE_TITLE')}</div>

            {/* 用户名 */}
            <div className="form-row form-username">
              <input
                name="username"
                type="text"
                className="form-input form-input-wide"
                placeholder={intl.get('LOGIN_PAGE_USERNAME')}
                ref={register({ required: true })}
              />
            </div>

            {/* 密码 */}
            <div className="form-row form-pwd">
              <input
                name="password"
                type="password"
                className="form-input form-input-wide"
                placeholder={intl.get('LOGIN_PAGE_PASSWORD')}
                ref={register({ required: true })}
              />
            </div>

            {/* 错误提示 */}
            <p className="errortip">
              {((errors.username && errors.username.types && errors.username.types.required) ||
                (errors.password && errors.password.types && errors.password.types.required)) && intl.get('LOGIN_PAGE_MEG_EMPTY')}
              {errors.username && errors.username.type && errors.username.type === 'textError' && intl.get('LOGIN_PAGE_MEG_USERNAME_OR_PASSWORD_ERROR')}
            </p>

            {/* 登录按钮 */}
            <div className="btnwrap">
              <button
                type="submit"
                className={`ui-btn ui-btn-wide ui-btn-main ${isSubmitting &&
                  's-disabled'}`}
              >
                {isSubmitting
                  ? intl.get('LOGIN_PAGE_BTN_LOGGING')
                  : intl.get('LOGIN_PAGE_BTN_LOGIN')}
              </button>
            </div>

          </div>
        </form>
      </div>
    </div>
  )
}

export default Login