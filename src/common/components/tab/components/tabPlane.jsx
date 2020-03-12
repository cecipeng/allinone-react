import React from 'react'
import classNames from 'classnames'

export default class TabPlane extends React.Component {
  static defaultProps = {
    tabKey: '', // tab的id
    tabName: 'tabName', // tab显示名称
    isActive: false, // 是否激活该tab
    isDisabled: false, // 是否禁用
    tabIcon: '', // 图标
    handleEnterPlaneCallback: ()=>{}, // 进入该plane的特殊回调
  }
  render() {
    const { children, isActive } = this.props

    return (
      <div className={classNames(
        'com-tab__plane-container',
        {'is-active': isActive}
      )}>
        { children }
      </div>
    )
  }
}
