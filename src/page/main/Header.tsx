import React, { useState } from 'react'
import { Link, urlFor } from '@gem-mine/durex-router'
import intl from '@gem-mine/intl'

// ====== Components ====== //
import { Menu, Dropdown } from 'fish'
import UserHead from '../../component/common/userHead'

// ====== DataType ====== //
import * as dataType from './data'

interface Props {
  currentUser: dataType.currentUser;
}

export default function Header(props: Props): JSX.Element {
  const [currentMenu, setCurrentMenu] = useState<string>()
  const { currentUser } = props

  /**
   * 切换菜单
   * @param newVal
   */
  const handleSetCurrentMenu = (newVal): void => {
    if (newVal !== currentMenu) {
      setCurrentMenu(newVal)
    }
  }
  return (
    <div className="com-header">
      <div className="layout-wrapper layout-bfc">
        {/* 右侧 */}
        <div className="layout-bfc__right">
          {
            currentUser ? (
              // 已登录
              <div className="header-userdrop">
                <Dropdown
                  placement="bottomEnd"
                  overlay={(
                    <Menu>
                      <Menu.Item key="0">退出登录</Menu.Item>
                      <Menu.Divider />
                      <Menu.Item key="1">退出登录</Menu.Item>
                    </Menu>
                  )}
                >
                  <UserHead head={currentUser.head} name={currentUser.name} />
                </Dropdown>
              </div>
            ) : (
              // 未登录
              <div className="unlogin">
                <Link className="ui-link ui-link-light" to={urlFor('login')}>
                  {intl.get('ROOT_PAGE_HEADER_SIGN_IN')}
                </Link>
                <Link className="ui-link ui-link-light" to={urlFor('login')}>
                  {intl.get('ROOT_PAGE_HEADER_SIGN_UP')}
                </Link>
              </div>
            )
          }
        </div>

        {/* 导航菜单 */}
        <div className="layout-bfc__content">
          <span className="logo" />
          <div className="com-mainmenu">
            <Menu onClick={handleSetCurrentMenu} selectedKeys={[currentMenu]} mode="horizontal">
              <Menu.Item key="home">
                {intl.get('ROOT_PAGE_HEADER_NAV_HOME')}
              </Menu.Item>
              <Menu.Item key="home">
                {intl.get('ROOT_PAGE_HEADER_NAV_NAVIGATION')}
              </Menu.Item>
            </Menu>
          </div>
        </div>
      </div>
    </div>
  )
}
