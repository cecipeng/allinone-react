import React from 'react'
import { bindActionCreators } from 'redux'
import { reduxForm, Field, SubmissionError, hasSubmitFailed } from 'redux-form'
import { connect } from 'react-redux'
import intl from 'react-intl-universal'

// ====== Action ====== //
import * as loginActionCreator from '../redux/actions'

// ====== Constant ====== //
import reducerNameConstants from '../../../common/utils/reducerNameConstants'

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.handleLoginIn = this.handleLoginIn.bind(this)
  }

  /**
   * 点击登录
   */
  handleLoginIn(data) {
    const { history, loginAction } = this.props
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
      loginAction.loginAction(
        {
          userName: data.username,
          password: data.password
        },
        history
      )
    }
  }

  render() {
    const {
      submitting, // 表单提交状态
      error, // 表单提交错误信息
      hasSubmitFailed, // 表单是否提交失败
      handleSubmit, // 表单提交操作
      loginReducer
    } = this.props

    return (
      <div className="layout-mod mod-login">
        <div className="layout-wrapper">
          <form onSubmit={handleSubmit(this.handleLoginIn)}>
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
                {hasSubmitFailed ? error : loginReducer.get('message')}
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
}

const LoginWithReduxForm = reduxForm({
  form: 'LoginForm'
})(Login)

function mapStateToProps(state) {
  return {
    hasSubmitFailed: hasSubmitFailed('LoginForm')(state), // 获取redux-form 的 submitFailed字段
    loginReducer: state[reducerNameConstants.LOGIN_REDUCER]
  }
}

function mapDispatchToProps(dispatch) {
  return {
    loginAction: bindActionCreators(loginActionCreator, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginWithReduxForm)
