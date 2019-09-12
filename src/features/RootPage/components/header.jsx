import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'

// ====== Components ====== //
import UserHead from '../../../common/components/userHead/index'

// ====== Constants ====== //
import { reducerNameConstants } from '../../../common/utils/reducerNameConstants'
import { routerConstants } from '../../../common/utils/routerConstants'

export class Header extends React.Component {
    render() {
        const { currentUserReducer } = this.props
        return (
            <div className="com-header">
                <div className="layout-wrapper layout-bfc">
                    <div className="layout-bfc__right">
                        {
                            currentUserReducer ?
                            (<div className="header-userdrop ui-dropdown">
                                <UserHead userInfo={currentUserReducer} />
                            </div>)
                            :
                            (<div className="unlogin">
                                <NavLink className="ui-link ui-link-light" to={routerConstants.LOGIN}>登录</NavLink>
                                <NavLink target="_blank" className="ui-link ui-link-light" to={routerConstants.LOGIN}>注册</NavLink>
                            </div>)
                        }
                    </div > 
                    <div className="layout-bfc__content">
                        <span className="logo" />
                        <div className="com-mainmenu">
                            <ul className="mainmenu">
                                <li><NavLink activeClassName="is-active" className="item" to={routerConstants.HOME}>Home</NavLink></li>
                                <li><NavLink activeClassName="is-active" className="item" to={routerConstants.NAVIGATION}>naviation</NavLink></li>
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
        currentUserReducer: state[reducerNameConstants.CURRENT_USER_REDUCER]
    }
}

export default connect(mapStateToProps)(Header)