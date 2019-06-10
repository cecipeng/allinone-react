import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from '../redux/actions'
import { NavLink } from 'react-router-dom'
import UserHead from '../../../common/components/userHead'
export class Header extends React.Component {
    render() {
        return (
            <div className="com-header">
                <div className="layout-wrapper layout-bfc">
                    <div className="layout-bfc__right">
                        {
                            this.props.userInfo != null ? (
                                <div className="header-userdrop ui-dropdown">
                                    <UserHead userInfo={this.props.userInfo} />
                                </div>
                            ) : (
                                <div className="unlogin">
                                    <NavLink className="ui-link ui-link-light" to="/login">登录</NavLink>
                                    <NavLink target="_blank" className="ui-link ui-link-light" to="/login">注册</NavLink>
                                </div>
                            )
                        }
                    </div > 
                    <div className="layout-bfc__content">
                        <span className="logo" />
                        <div className="com-mainmenu">
                            <ul className="mainmenu">
                                <li><NavLink activeClassName="is-active" className="item" to="/rootPage/home">Home</NavLink></li>
                                <li><NavLink activeClassName="is-active" className="item" to="/rootPage/navigation">naviation</NavLink></li>
                            </ul >
                        </div >
                    </div >
                </div >   
            </div >
        )
    }
}


function mapStateToProps(state) {
    return {
        userInfo: state.userInfo
    }
}
  
export default connect(mapStateToProps)(Header)