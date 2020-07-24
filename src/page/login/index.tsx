import React from 'react'
import intl from '@gem-mine/intl'
import { reduxForm, Field, SubmissionError } from 'redux-form'
import { actions } from '@gem-mine/durex'

// ====== Constants ====== //
import REQUEST_STATUS_CODE from '../../constant/requestConstant'
import { DEFAULT_CONFIG } from '../../constant/commonConstant'

// ====== Util====== //
import * as apiUtil from '../../util/apiUtil'
import * as commonUtil from '../../util/commonUtil'
import * as adapterUtil from '../../util/adapterUtil'

function Login(props): JSX.Element {
  const {
    submitting, // 表单提交状态
    error, // 表单提交错误信息
    hasSubmitFailed, // 表单是否提交失败
    handleSubmit // 表单提交操作
  } = props

  /**
   * 点击登录
   */
  const handleLoginIn = (data): void => {
    // 1.验证空值
    if (!data.username) {
      throw new SubmissionError({
        _error: intl.get('LOGIN_PAGE_MEG_USERNAME_EMPTY')
      })
    } else if (!data.password) {
      throw new SubmissionError({
        _error: intl.get('LOGIN_PAGE_MEG_PASSWORD_EMPTY')
      })
    } else {
      // 2.后台验证
      apiUtil.fetchLoginIn({
        userName: data.username,
        password: data.password
      }).then(response => {
        const _meta = response.data.meta
        const _data = response.data.datas
        // 验证不通过时
        if (_meta.code === REQUEST_STATUS_CODE.LOGIN_INFO_ERROR) {
          // const errorMsg = intl.get('LOGIN_PAGE_MEG_USERNAME_OR_PASSWORD_ERROR')
          // 1. 更新登录状态，返回错误信息
          // dispatch(
          //   updateLoginStatusAndMessageSuccessAction(
          //     storeStatusConstants.loginStatus.LOGGED_OUT,
          //     errorMsg
          //   )
          // )
        }
        // 验证通过时
        else if (_meta.code === REQUEST_STATUS_CODE.REQUEST_SUCCESS) {
          const _currentUser = adapterUtil.currentUserAdapter(_data)
          // 1. 存储用户信息 => localStorage
          commonUtil.setCurrentUserToLocalstorage(_currentUser)

          // 2. 存储用户信息 => store
          actions.main.updateCurrentUser(_currentUser)

          // 3. 跳转到前一个页面或home页 todo：如何跳转前一个页面
          actions.router.push(DEFAULT_CONFIG.PAGE)
        }
      })
    }
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
              <Field
                name="username"
                component="input"
                type="text"
                className="form-input form-input-wide"
                placeholder={intl.get('LOGIN_PAGE_USERNAME')}
              />
            </div>

            {/* 密码 */}
            <div className="form-row form-pwd">
              <Field
                name="password"
                component="input"
                type="password"
                className="form-input form-input-wide"
                placeholder={intl.get('LOGIN_PAGE_PASSWORD')}
              />
            </div>

            {/* 错误提示 */}
            <p className="errortip">
              {hasSubmitFailed ? error : ''}
            </p>

            {/* 登录按钮 */}
            <div className="btnwrap">
              <button
                type="submit"
                className={`ui-btn ui-btn-wide ui-btn-main ${submitting &&
                  's-disabled'}`}
              >
                {submitting
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

const LoginWithReduxForm = reduxForm({
  form: 'LoginForm'
})(Login)

export default LoginWithReduxForm