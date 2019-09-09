import React from 'react'
import { bindActionCreators } from 'redux'
import { reduxForm, Field, SubmissionError, hasSubmitFailed } from 'redux-form'
import { connect } from 'react-redux'

// ====== Actions ====== //
import * as currentUserAction from '../../../common/redux/currentUser/actions'

// ====== Helper ====== //
import UTIL from '../../../common/utils/utils'

// ====== Components ====== //
import Radio, { RadioGroup } from '../../../common/components/radio/index';
Radio.Group = RadioGroup

export class Login extends React.Component {
  constructor(props) {
    super(props)
    this.handleLoginIn = this.handleLoginIn.bind(this)
  }

  /**
   * 点击登录
   */
  handleLoginIn (data) {
    const { currentUserAction } = this.props
    // 1.验证空值
    if(!data.username) {
      throw new SubmissionError({
        _error: '用户名不能为空!'
      })
    } else if (!data.password) {
      throw new SubmissionError({
        _error: '密码不能为空!'
      })
    } else {
      // 2.验证输入合法性
      UTIL.request('post', 'api/login/verify', {
        'userName': data.username,
        'password': data.password
      }).then((res) => {
        if (res.data.meta.code === '2001') {
          throw new SubmissionError({
            _error: '帐号或者密码错误！!'
          })
        } else if (res.data.meta.code === '0000') {

          // 3.存储localStorage
          localStorage.setItem('userId', res.data.datas.userId);
          localStorage.setItem('userName', res.data.datas.userName);
          localStorage.setItem('userHead', res.data.datas.userHead);
          localStorage.setItem('accessToken', res.data.datas.accessToken);

          // 4.存储用户信息到store
          currentUserAction.updateCurrentUserAction(res.data.datas)

          // 5.跳转到前一个页面
          this.props.history.push('/home')

        } else {
          console.log('Allinone ------> （登录接口错误信息）' + res.data.meta.message)
          throw new SubmissionError({
            _error: res.data.meta.message
          })
        }
      })
    }
  }

  render() {
    const {
      submitting, // 表单提交状态
      error, // 表单提交错误信息
      submitFailed, // 表单是否提交失败
      handleSubmit, // 表单提交操作
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
              text: (<div>2</div>),
              value: 'b',
              icon: 'detail'
            },
            {
              text: (<div>2</div>),
              value: 'c',
              icon: 'detail'
            }
          ]}
        />
        <Radio
        value='qq'
          isDisabled={false}
          icon='detail'
        >
          <div>xxx</div>
        </Radio>
        <Radio
        value='qq'
          isDisabled={false}
        >
          <div>xxx</div>
        </Radio>

        <div className='layout-wrapper'>
          <form onSubmit={handleSubmit(this.handleLoginIn)}>
            <div className='formbox'>
              <div className='form-title'>登录 Allinone</div>
              <div className='form-row form-username'>
                <Field name="username" component='input' type='text' className='form-input form-input-wide' placeholder='用户名' />
              </div>
              <div className='form-row form-pwd'>
                <Field name="password" component='input' type='password' className='form-input form-input-wide' placeholder='密码' />
              </div>
              <p className='errortip'>{submitFailed && error}</p>
              <div className='btnwrap'>
                <button type="submit" className={`ui-btn ui-btn-wide ui-btn-main ${submitting && 's-disabled'}`}>
                  { submitting ? '正在登录...' : '登录' }
                </button>
              </div>
            </div>
          </form>
        </div>
      </div >
    )
  }
}

const reduxFormLogin = reduxForm({
  form: 'LoginForm'
})(Login);

function mapStateToProps(state) {
  return {
    submitFailed: hasSubmitFailed('LoginForm')(state) // 获取redux-form 的 submitFailed字段
  }
}

function mapDispatchToProps(dispatch) {
  return {
    currentUserAction: bindActionCreators({ ...currentUserAction }, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(reduxFormLogin)