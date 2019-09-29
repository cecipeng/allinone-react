import React from 'react'
import classNames from 'classnames'

// ====== Constants ====== //
import { PLACEMENT } from '../utils/constants'

export default class Select extends React.Component {
  static defaultProps = {
    placement: 'bottomStart', // 菜单弹出位置
    isDisabled: false, // 是否禁用
    // trigger: 'hover', // 触发下拉的行为, 移动端不支持 hover   click|hover
    size: 'middle', // 默认按钮大小  'large'/'middle'/'small'
    dropdownWidth: '', // 下拉菜单宽度，默认为：和选择器同宽
    defaultValue: '', // 指定默认选中的条目的value，使用默认按钮时生效
    options: [
      // 下拉菜单配置
      {
        text: '', // 显示内容
        value: '' // 选项value值
      }
    ],
    getSelectOption: function() {} // 父组件获取当前选中值
  }

  constructor(props) {
    super(props)

    this.state = {
      selectOption: { // 选中项
        value: '',
        text: ''
      },
      isOpenDropdown: false // 是否打开下拉菜单
    }
    this.renderTriggerButton = this.renderTriggerButton.bind(this)
    this.renderOptions = this.renderOptions.bind(this)
    this.setSelectOption = this.setSelectOption.bind(this)
    this.onClickItem = this.onClickItem.bind(this)
    this.handleDropdownShow = this.handleDropdownShow.bind(this)
  }

  componentWillMount() {
    this.setSelectOption(this.props.defaultValue)
  }

  /**
   * 根据传入的value设置选中项
   * @param {string} value
   */
  setSelectOption(value) {
    const { getSelectOption, options } = this.props
    let _value = value || options[0].value
    let _text

    options.forEach((item) => {
      if (item.value === _value) {
        _text = item.text
      }
    })
    this.setState(
      {
        selectOption: {
          value: _value,
          text: _text
        }
      },
      () => {
        // 传递给父组件
        getSelectOption && getSelectOption(this.state.selectOption)
      }
    )
  }

  /**
   * 下拉菜单的显示和隐藏
   */
  handleDropdownShow() {
    if (!this.props.isDisabled) {
      this.setState(oldState => ({
        isOpenDropdown: !oldState.isOpenDropdown
      }))
    }
  }

  /**
   * 点击某一项
   * @param {string} value 
   */
  onClickItem(value) {
    this.setSelectOption(value)
    this.handleDropdownShow()
  }

  /**
   * 渲染默认按钮
   */
  renderTriggerButton() {
    const { children } = this.props
    const { selectOption } = this.state

    if (children) {
      // 支持自定义DOM
      return children
    } else {
      return (
        <span className='btn-rel'>
          <span
            className='selector-btn'
            data-value={selectOption.value}
          >
            {selectOption.text}
          </span>
          <i className='dropdown-arrow' />
        </span>
      )
    }
  }

  /**
   * 渲染下拉菜单项
   */
  renderOptions() {
    return this.props.options.map((item, index) => (
      <li
        key={index}
        className={
          this.state.selectOption.value === item.value ? 'selected' : ''
        }
        onClick={() => { this.onClickItem(item.value) }}
        data-value={item.value}
      >
        <span className='dropitem'>{item.text}</span>
      </li>
    ))
  }

  render() {
    const { placement, dropdownWidth, size, isDisabled } = this.props
    const { isOpenDropdown } = this.state
    const _mainTrigger = this.renderTriggerButton()
    const _options = this.renderOptions()

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
          'ui-dropdown',
          { [`ui-dropdown--${size}`]: size !== 'middle' },
          { 'is-disabled': isDisabled }
        )}
      >
        {/* 主按钮 */}
        <div
          className='dropdown-mainlink'
          onClick={this.handleDropdownShow}
        >
          {_mainTrigger}
        </div>

        {/* 下拉菜单 */}
        {isOpenDropdown && (
          <div
            className={`dropdown-list ${placementClassName}`}
            style={{
              width: dropdownWidth
                ? dropdownWidth
                : '100%'
            }}
          >
            <ul className='droplist'>
              {_options}
            </ul>
          </div>
        )}

      </div>
    )
  }
}
