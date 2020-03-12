import React from 'react'
import classNames from 'classnames'
import $ from 'jquery'

// ====== Constants ====== //
import { PLACEMENT } from '../utils/constants'

// ====== Components ====== //
import Icon from '../../icon/index'

// ====== Util ====== //
import UTIL from '../../../utils/utils'

export default class Tab extends React.Component {
  static defaultProps = {
    placement: 'top', // 页签位置：默认top，其他：bottom、left、right
    defaultActivePlaneKey: '', // 默认激活的页签id值
    size: 'middle', // 默认页签大小  'large'/'middle'/'small'
    extraContent: '', // 页签上额外的内容，值为reactNode
    changeTabCallback: () => {}, // 切换页签的回调函数
  }

  constructor(props) {
    super(props)

    this.state = {
      activePlaneKey: '', // 当前激活的页签id值
    }

    this.renderBar = this.renderBar.bind(this)
    this.renderPlane = this.renderPlane.bind(this)
    this.handleClickTab = this.handleClickTab.bind(this)
    this.handleChangeTab = this.handleChangeTab.bind(this)
  }

  componentDidMount() {
    
  }

  componentWillMount() {
    const { children, defaultActivePlaneKey } = this.props
    this.setState({
      activePlaneKey: defaultActivePlaneKey || children[0].props.tabKey
    })
  }

  handleClickTab(e, key, handleEnterPlaneCallback) {
    const { activePlaneKey } = this.state
    if( activePlaneKey !== key) {
      handleEnterPlaneCallback && handleEnterPlaneCallback(e) // 触发plane特有的回调
      this.handleChangeTab(e, key) // 触发tab切换的操作
    } 
  }

  /**
   * tab切换
   */
  handleChangeTab(e, key) {
    const { changeTabCallback } = this.props
    e.stopPropagation()
    this.setState({
      activePlaneKey: key
    })
    typeof changeTabCallback === 'function' && changeTabCallback()
  }

  /**
   * 渲染tab标签
   */
  renderBar() {
    const { children } = this.props
    const { activePlaneKey } = this.state
    return children.map((child) => (
      <li className={classNames(
          `com-tab__bar-item`,
          { 'is-disabled': child.props.isDisabled },
          { 'is-active': activePlaneKey === child.props.tabKey }
        )} key={child.props.tabKey} data-id={child.props.tabKey} onClick={(e) => { this.handleClickTab(e, child.props.tabKey, child.props.handleEnterPlaneCallback)}}>
        {
          child.props.tabIcon && child.props.tabIcon.length && <Icon type={child.props.tabIcon} />
        }
        <span className="com-tab__bar-text">{child.props.tabName}</span>
      </li>
    ))
  }

  /**
   * 渲染plane
   */
  renderPlane() {
    const { children } = this.props
    const { activePlaneKey } = this.state
    
    for(let i=0; i<children.length; i++) {
      if (activePlaneKey === children[i].props.tabKey) {
        return children[i] // 只渲染激活的plane
      }
    }
    return children[0] // 未匹配到对应key值，默认显示第一个plane
  }

  render() {
    const { size, placement, extraContent } = this.props

    // 设置页签位置
    let placementClassName = ''
    PLACEMENT && PLACEMENT.forEach(item => {
      if (item.name === placement) {
        placementClassName = item.className
      }
    })

    return (
      <div 
        className={classNames(
          `com-tab ${placementClassName}`,
          { [`com-tab--${size}`]: size !== 'middle' },
        )}
      >
        {/* 页签 */}
        <div className="com-tab__bar">
          <div className="com-tab__bar-extra">
            { extraContent }
          </div>
          <div className="com-tab__bar-container">
            <div className="com-tab__bar-content">
              <ul className="com-tab__bar-list">
                { this.renderBar() }
              </ul>
            </div>
          </div>
        </div>

        {/* plane */}
        <div className="com-tab__plane">
          { this.renderPlane() }
        </div>
      </div>
    )
  }
}
