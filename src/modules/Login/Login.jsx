import React from 'react'

export default class Login extends React.Component {
    render () {
        return (
            <div className='layout-mod mod-login'>
                <div className='layout-wrapper'>
                    <div className='formbox'>
                        <div className='form-title'>登录 Allinone</div>
                        <div className='form-row form-username'>
                            <input type='text' v-model='loginModel.userName' className='form-input form-input-wide' placeholder='用户名' />
                        </div>
                        <div className='form-row form-pwd'>
                            <input type='password' className='form-input form-input-wide' placeholder='密码' />
                        </div>
                        <p className='errortip'>error</p>
                        <div className='btnwrap'>
                            <a className='ui-btn ui-btn-wide ui-btn-main s-disabled' v-if='isLogining'>正在登录...</a>
                            <a className='ui-btn ui-btn-wide ui-btn-main' v-else>登录</a>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}