import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import intl from 'react-intl-universal'

// ====== Components ====== //
import UserHead from '../../../common/components/userHead/index'
import Dropdown from '../../../common/components/dropdown/index'

// ====== Constants ====== //
import reducerNameConstants from '../../../common/utils/reducerNameConstants'
import routerConstants from '../../../common/utils/routerConstants'

// ====== Util ====== //
import UTIL from '../../../common/utils/utils'

export class Header extends React.Component {
  constructor (props) {
    super(props)

    this.handleLogOut = this.handleLogOut.bind(this)
  }

  /**
   * 退出登录
   */
  handleLogOut () {
    // 1.从localstorage删除用户信息
    UTIL.deleteCurrentUserToLocalstorage()

    // 2.从store删除用户信息

    // 3.从store删除登录信息

    // 4.从store删除token

    // 5. 跳转到登录页
  }
  render () {
    const { currentUserReducer } = this.props
    return (
      <div className='com-header'>
        <div className='layout-wrapper layout-bfc'>
          {/* 右侧 */}
          <div className='layout-bfc__right'>
            {
              currentUserReducer ? ( 
                // 已登录
                <div className='header-userdrop'>
                  <Dropdown
                    dropdownWidth='150px'
                    placement='bottomEnd'
                    options={[
                        {
                          text: '退出登录',
                          icon: 'icon-log-out',
                          handleFunc: () => {
                            this.handleLogOut()
                          }
                        }
                    ]}
                  >
                    <UserHead userInfo={currentUserReducer} />
                  </Dropdown>
                </div>
              ) : (
                // 未登录
                <div className='unlogin'>
                  <NavLink
                    className='ui-link ui-link-light'
                    to={routerConstants.LOGIN}
                  >
                    {intl.get('ROOT_PAGE_HEADER_SIGN_IN')}
                  </NavLink>
                  <NavLink
                    target='_blank'
                    className='ui-link ui-link-light'
                    to={routerConstants.LOGIN}
                  >
                    {intl.get('ROOT_PAGE_HEADER_SIGN_UP')}
                  </NavLink>
                </div>
              )}
          </div>

          {/* 导航菜单 */}
          <div className='layout-bfc__content'>
            <span className='logo' />
            <div className='com-mainmenu'>
              <ul className='mainmenu'>
                <li>
                  <NavLink
                    activeClassName='is-active'
                    className='item'
                    to={routerConstants.HOME}
                  >
                    {intl.get('ROOT_PAGE_HEADER_NAV_HOME')}
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    activeClassName='is-active'
                    className='item'
                    to={routerConstants.NAVIGATION}
                  >
                    {intl.get('ROOT_PAGE_HEADER_NAV_NAVIGATION')}
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    activeClassName='is-active'
                    className='item'
                    to={routerConstants.CECIUI}
                  >
                    {intl.get('ROOT_PAGE_HEADER_NAV_CECIUI')}
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    currentUserReducer: state[reducerNameConstants.CURRENT_USER_REDUCER]
  }
}

export default connect(mapStateToProps)(Header)
