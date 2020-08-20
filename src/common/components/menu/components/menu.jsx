import React, { Children } from 'react'
import classNames from 'classnames'

// ====== Constants ====== //
import { PLACEMENT } from '../utils/constants'

// ====== Components ====== //
import Icon from '../../icon/index'

// ====== Util ====== //
import UTIL from '../../../utils/utils'

export default class Menu extends React.Component {
  static defaultProps = {
    defaultActiveKeys: [], // 默认激活的菜单项组的id值
    defaultOpenSubKeys: [], // 默认展开的非一级菜单项组的id值，[二级菜单id值，三级，四级， ...]
    size: 'middle', // 默认菜单大小  'large'/'middle'/'small'
    menuWidth: '', // 默认菜单宽度，不设置时使用样式中默认的，水平100%，垂直234px
    mode: 'vertical', // 默认菜单类型  支持垂直（vertical，默认）、水平（horizontal）、和内嵌（inline）模式三种
    customStyle: {}, // 自定义样式
    theme: 'light', // 主题颜色:light,dark
    handleClickItemCallBack: () => {}, // 点击菜单项的回调函数
    handleChangeOpenSubCallBack: () => {}, // 展开下级菜单的回调函数
  }

  constructor(props) {
    super(props)

    this.state = {
      activeKeys: [],
      openKeys: [],
    }

  }

  componentDidMount() {
  }

  componentWillMount() {

  }

  // findActiveKey(children) {
  //   children.forEach((child) => {
  //     if(child.props.itemKey === key) {
  //       return
  //     }
  //     if(typeof child === 'Array') {
  //       this.findActiveKey(child)
  //     }
  //   })
  // }

  // setActiveKeys(key) {
  //   const { children } = this.props

  //   this.findActiveKey(children)
    
  //   this.setState({

  //   })
  // }

  render() {
    const { size, mode, theme, menuWidth, children, customStyle } = this.props
    return (
      <ul className={classNames(
        'com-menu com-menu--inline',
        { [`com-menu--${size}`]: size !== 'middle' },
        { [`com-menu--${mode}`]: mode !== 'vertical' },
        { [`com-menu--${theme}`]: theme !== 'light' },
        customStyle
      )} style={
        {width: menuWidth}
      }>
        { children }
      </ul>
    )
  }
}
