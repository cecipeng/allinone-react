import React from 'react'
import classNames from 'classnames'

// ====== Constants ====== //
import { PLACEMENT } from '../utils/constants'

// ====== Components ====== //
import Icon from '../../icon/index'

// ====== Util ====== //
import UTIL from '../../../utils/utils'

export default class MenuItem extends React.Component {
  static defaultProps = {
    isDisabled: false, // 是否禁用
    isActive: false, // 是否选中
    isOpen: false, // 是否展开下级菜单
    itemKey: '', // item的id值
    itemIcon: '', // 图标，即Icon组件的type值
    itemTitle: 'menu', // 菜单名称
  }

  constructor(props) {
    super(props)

    this.state = {
      
    }

  }

  componentDidMount() {
    
  }

  componentWillMount() {

  }

  render() {
    const { children, isActive, isOpen, isDisabled, itemTitle, itemIcon} = this.props
    return (
      <li className={classNames(
        'com-menu__item',
        {'com-menu__item--leaf': !children },
      )}
        data-state-active={isActive}
        data-state-open={isOpen}
        data-state-disabled={isDisabled}
        data-state-hasChildren={!!children}
      >
        <div className="com-menu__title">
          {
            !!children && <Icon type={isOpen ? 'icon-top' : 'icon-bottom'} custormClass='com-menu__arrow' />
          }
          {
            itemIcon && <Icon type={itemIcon} />
          }
          { itemTitle }
        </div>
        { children }
      </li>
    )
  }
}
