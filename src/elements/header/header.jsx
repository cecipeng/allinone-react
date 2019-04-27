import React from 'react'
import { NavLink } from 'react-router-dom'

export default class Header extends React.Component {
    render() {
        return (
            <div className="com-header">
                <div className="layout-wrapper">
                    <div className="flbox">
                        <span className="logo" />
                        <div className="com-mainmenu">
                            <ul className="mainmenu">
                                <li><NavLink activeClassName="is-active" className="item" to="/home">Home</NavLink></li>
                                <li><NavLink activeClassName="is-active" className="item" to="/navigation">naviation</NavLink></li>
                            </ul >
                        </div >
                    </div >
                    <div className="frbox">
                        <div className="header-userdrop ui-dropdown" v-if="showUserHeader"></div >
                        <div className="unlogin" v-else>
                            <NavLink className="ui-link ui-link-light" to="/login">登录</NavLink>
                            <NavLink target="_blank" className="ui-link ui-link-light" to="/login">注册</NavLink>
                        </div>
                    </div >   
                </div >   
            </div >
        )
    }
}