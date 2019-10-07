import React from 'react'
import classNames from 'classnames'
import $ from 'jquery'

// ====== Constants ====== //
import { PLACEMENT } from '../utils/constants'

// ====== Components ====== //
import Icon from '../../icon/index'

// ====== Util ====== //
import UTIL from '../../../utils/utils'

export default class Dropdown extends React.Component {
  static defaultProps = {
    placement: 'bottomStart', // 菜单弹出位置
    isDisabled: false, // 是否禁用
    trigger: 'hover', // 触发下拉的行为, 移动端不支持 hover   click|hover
    dropdownWidth: '100%', // 下拉菜单宽度，默认为：和选择器同宽
    options: [
      // 下拉菜单配置
      {
        text: '', // 显示内容
        icon: '', // 图标
        // value: '', // 选项value值
        isDisabled: false, // 单个选项是否禁用
        handleFunc: () => {}, // 点击事件
        children: [
          {
            text: '',
            icon: '',
            // value: '',
            isDisabled: false, // 单个选项是否禁用
            handleFunc: () => {}, // 点击事件
            children: []
          }
        ]
      }
    ],
  }

  constructor(props) {
    super(props)

    this.state = {
      isOpenDropdown: false // 是否打开下拉菜单
    }
    this.renderOptions = this.renderOptions.bind(this)
    this.handleHiddenDropdown = this.handleHiddenDropdown.bind(this)
    this.handleTriggleDropdownShow = this.handleTriggleDropdownShow.bind(this)
  }

  componentDidMount() {
    if(this.props.trigger === 'click') {
      window.addEventListener('click', this.handleHiddenDropdown, false)
    }
  }

  componentWillUnmount() {
    if(this.props.trigger === 'click') {
      window.removeEventListener('click', this.handleHiddenDropdown, false)
    }
  }
  /**
   * 下拉菜单的显示和隐藏
   */
  handleTriggleDropdownShow() {
    if (!this.props.isDisabled) {
      this.setState(prevState => ({
        isOpenDropdown: !prevState.isOpenDropdown
      }))
    }
  }

  /**
   * 隐藏下拉菜单
   */
  handleHiddenDropdown(e) {
    const _targetId = $(e.target).closest('.com-dropdown').attr('data-id')
    const _thisId = $(this.refs.dropdown).attr('data-id')
    e.stopPropagation()
    
    if (_targetId !== _thisId) {
      this.setState({
        isOpenDropdown: false
      })
    }
  }

  /**
   * 渲染下拉菜单项
   */
  renderOptions(options) {
    return options ?
      options.map((item, index) => {
        if (item.children && item.children.length) {
          return (
            <li
              key={index}
              className={classNames(
                'com-dropdown__menu-item',
                { 'is-disabled': item.isDisabled }
              )}
              onClick={(e) => { this.handleTriggleDropdownShow(); item.handleFunc(e); e.stopPropagation() }}
            >
              <div
                className={classNames(
                  'com-dropdown__menu-link',
                  { 'is-haschild': !!item.children.length }
                )}
              >
                {
                  item.icon && item.icon.length && <Icon type={item.icon} />
                }
                <p className='com-dropdown__menu-text'>{item.text}</p>
              </div>
              <ul className='com-dropdown__submenu'>
                { this.renderOptions(item.children)}
              </ul>
            </li>
          )
        } else {
          return (
            <li
              key={index}
              className={classNames(
                'com-dropdown__menu-item',
                { 'is-disabled': item.isDisabled }
              )}
              onClick={(e) => { this.handleTriggleDropdownShow(); item.handleFunc(e); e.stopPropagation() }}
            >
              <div className='com-dropdown__menu-link'>
                {
                  item.icon && item.icon.length && <Icon type={item.icon} />
                }
                <p className='com-dropdown__menu-text'>{item.text}</p>
              </div>
            </li>
          )
        }
      })
      : <div>无内容</div>
  }

  render() {
    const { placement, dropdownWidth, isDisabled, children, options } = this.props
    const { isOpenDropdown } = this.state
    const _options = this.renderOptions(options)
    const _dropdownId = UTIL.getRandomId()

    // 设置下拉菜单位置
    let placementClassName = ''
    PLACEMENT && PLACEMENT.forEach(item => {
      if (item.name === placement) {
        placementClassName = item.className
      }
    })

    return (
      <div
        className={classNames(
          'com-dropdown',
          { 'is-disabled': isDisabled }
        )}
        ref='dropdown'
        data-id={_dropdownId}
      >
        {/* 主按钮 */}
        <div
          className='com-dropdown__selection'
          onClick={this.handleTriggleDropdownShow}
        >
          {children}
        </div>

        {/* 下拉菜单 */}
        {isOpenDropdown && (
          <div
            className={`com-dropdown__menu ${placementClassName}`}
            style={{
              width: dropdownWidth
                ? dropdownWidth
                : '100%'
            }}
          >
            <ul className='com-dropdown__menu-list'>
              {_options}
            </ul>
          </div>
        )}

      </div>
    )
  }
}
