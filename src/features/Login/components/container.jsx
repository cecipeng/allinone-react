import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from '../redux/actions'

import UTIL from '../../../common/utils'

export class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '', // 用户名
      password: '', // 密码
      isLogining: false, // 是否：正在登录中
      message: '' // 提示信息
    }
    this.loginIn = this.loginIn.bind(this)
    this.validate = this.validate.bind(this)
    this.setLoginState = this.setLoginState.bind(this)
    this.setMessage = this.setMessage.bind(this)
    this.setUsername = this.setUsername.bind(this)
    this.setPassword = this.setPassword.bind(this)
  }

  /**
   * 执行登录
   */
  loginIn (e) {
    e.preventDefault()

    // 1.按钮切换为：正在登录中
    this.setLoginState(true)

    // 2.验证输入合法性
    if (this.validate()) {
        UTIL.request('post','api/login/verify',{
            'userName': this.state.username,
            'password': this.state.password
        }).then((res) => {
          if (res.data.meta.code == '2001') {
            this.setMessage('帐号或者密码错误！')
            this.setLoginState(false)
            return
          } else
          if (res.data.meta.code == '0000') {
            // 3.清空错误提示
            this.setMessage('')

            // 4.存储localStorage
            localStorage.setItem('userId', res.data.datas.userId);
            localStorage.setItem('userName', res.data.datas.userName);
            localStorage.setItem('userHead', res.data.datas.userHead);
            localStorage.setItem('accessToken', res.data.datas.accessToken);

            // 5.按钮切换为：登录
            this.setLoginState(false)

            // 6.存储用户信息到store
            this.props.updateUserInfo(res.data.datas)

            // 7.跳转到前一个页面
            this.props.history.goBack()

          } else {
            this.setMessage(res.data.meta.message)
            console.log('Allinone ------> （登录接口错误信息）' + res.data.meta.message)
          }
        })
    }
  }

  /**
   * 表单验证合法性
   */
  validate () {
    if (this.state.username.length === 0) {
        this.setMessage('用户名不能为空！')
        this.setLoginState(false)
        return false
    }
    if (this.state.password.length === 0) {
        this.setMessage('密码不能为空！')
        this.setLoginState(false)
        return false
    }
    return true
  }

  /**
   * 设置：登录状态
   * @param {登录状态，boolean} state 
   */
  setLoginState (state) {
    this.setState({
        isLogining: state
    })
  }

  /**
   * 设置：提示信息
   * @param {提示信息，string} text 
   */
  setMessage (text) {
    this.setState({
        message: text
    })
  }

  /**
   * 设置：用户名
   */
  setUsername (e) {
    this.setState({
      username: e.target.value
    })
  }

  /**
   * 设置：密码
   */
  setPassword (e) {
    this.setState({
      password: e.target.value
    })
  }

  render() {
    return (
      <div className='layout-mod mod-login'>
        <div className='layout-wrapper'>
          <div className='formbox'>
            <div className='form-title'>登录 Allinone</div>
            <div className='form-row form-username'>
              <input type='text' value={this.state.username} onChange={this.setUsername} className='form-input form-input-wide' placeholder='用户名' />
            </div>
            <div className='form-row form-pwd'>
              <input type='password' value={this.state.password} onChange={this.setPassword} className='form-input form-input-wide' placeholder='密码' />
            </div>
            <p className='errortip'>{ this.state.message }</p>
            <div className='btnwrap'>
              { this.state.isLogining ?
                ( <a className='ui-btn ui-btn-wide ui-btn-main s-disabled'>正在登录...</a> ) :
                ( <a className='ui-btn ui-btn-wide ui-btn-main' onClick={this.loginIn}>登录</a> )
              }
            </div>
          </div>
        </div>
      </div >
    )
  }
}

function mapStateToProps(state) {
  return state.userInfo
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ ...actions }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)