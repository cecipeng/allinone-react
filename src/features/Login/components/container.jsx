import React from 'react'
import { bindActionCreators } from 'redux'
import { reduxForm, Field, SubmissionError, hasSubmitFailed } from 'redux-form'
import { connect } from 'react-redux'
import intl from 'react-intl-universal'

// ====== Action ====== //
import * as loginActionCreator from '../redux/actions'

// ====== Constant ====== //
import reducerNameConstants from '../../../common/utils/reducerNameConstants'

// ====== Component ====== //
import Radio, { RadioGroup } from '../../../common/components/radio/index'
Radio.Group = RadioGroup

export class Login extends React.Component {
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
        _error: '用户名不能为空!'
      })
    } else if (!data.password) {
      throw new SubmissionError({
        _error: '密码不能为空!'
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
      <div className='layout-mod mod-login'>
        <Radio.Group
          type='button'
          buttonSize='small'
          value='b'
          radioList={[
            {
              value: 'a',
              icon: 'list'
            },
            {
              text: <div>2</div>,
              value: 'b',
              icon: 'detail'
            },
            {
              text: <div>2</div>,
              value: 'c',
              icon: 'detail'
            }
          ]}
        />
        <Radio value='qq' isDisabled={false} icon='detail'>
          <div>xxx</div>
        </Radio>
        <Radio value='qq' isDisabled={false}>
          <div>xxx</div>
        </Radio>

        <div className='layout-wrapper'>
          <form onSubmit={handleSubmit(this.handleLoginIn)}>
            <div className='formbox'>
              <div className='form-title'>登录 Allinone</div>
              <div className='form-row form-username'>
                <Field
                  name='username'
                  component='input'
                  type='text'
                  className='form-input form-input-wide'
                  placeholder='用户名'
                />
              </div>
              <div className='form-row form-pwd'>
                <Field
                  name='password'
                  component='input'
                  type='password'
                  className='form-input form-input-wide'
                  placeholder='密码'
                />
              </div>
              <p className='errortip'>
                {hasSubmitFailed ? error : loginReducer.message}
              </p>
              <div className='btnwrap'>
                <button
                  type='submit'
                  className={`ui-btn ui-btn-wide ui-btn-main ${submitting &&
                    's-disabled'}`}
                >
                  {submitting ? '正在登录...' : '登录'}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

const reduxFormLogin = reduxForm({
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
)(reduxFormLogin)
