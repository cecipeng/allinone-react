import React from 'react'
import classNames from 'classnames'
import $ from 'jquery'

// ====== Constants ====== //
import { PLACEMENT } from '../utils/constants'

// ====== Components ====== //
import Icon from '../../icon/index'

// ====== Util ====== //
import UTIL from '../../../utils/utils'

export default class Select extends React.Component {
  static defaultProps = {
    placement: 'bottomStart', // 菜单弹出位置
    isDisabled: false, // 是否禁用
    size: 'middle', // 默认按钮大小  'large'/'middle'/'small'
    selectWidth: '', // 下拉菜单宽度，默认为：和选择器同宽
    defaultValue: '', // 指定默认选中的条目的value，使用默认按钮时生效
    options: [
      // 下拉菜单配置
      {
        text: '', // 显示内容
        icon: '', // 图标
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
      isOpenSelect: false // 是否打开下拉菜单
    }
    this.renderTriggerButton = this.renderTriggerButton.bind(this)
    this.renderOptions = this.renderOptions.bind(this)
    this.setSelectOption = this.setSelectOption.bind(this)
    this.onClickItem = this.onClickItem.bind(this)
    this.handleHiddenSelect = this.handleHiddenSelect.bind(this)
    this.handleTriggleSelectShow = this.handleTriggleSelectShow.bind(this)
  }

  componentWillMount() {
    this.setSelectOption(this.props.defaultValue)
  }

  componentDidMount() {
    window.addEventListener('click', this.handleHiddenSelect, false)
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.handleHiddenSelect, false)
  }

  /**
   * 根据传入的value设置选中项
   * @param {string} value
   */
  setSelectOption(value) {
    const { getSelectOption, options } = this.props
    let _value = value || options[0].value
    let _text
    let _icon

    options.forEach((item) => {
      if (item.value === _value) {
        _text = item.text
        _icon = item.icon
      }
    })
    this.setState(
      {
        selectOption: {
          value: _value,
          icon: _icon,
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
  handleTriggleSelectShow() {
    if (!this.props.isDisabled) {
      this.setState(prevState => ({
        isOpenSelect: !prevState.isOpenSelect
      }))
    }
  }

  /**
   * 隐藏下拉菜单
   */
  handleHiddenSelect(e) {
    const _targetId = $(e.target).closest('.com-select').attr('data-id')
    const _thisId = $(this.refs.select).attr('data-id')
    e.stopPropagation()
    
    if (_targetId !== _thisId) {
      this.setState({
        isOpenSelect: false
      })
    }
  }

  /**
   * 点击某一项
   * @param {string} value 
   */
  onClickItem(value) {
    this.setSelectOption(value)
    this.handleTriggleSelectShow()
  }

  /**
   * 渲染默认按钮
   */
  renderTriggerButton() {
    const { selectOption, isOpenSelect } = this.state

    const _styleArrow = isOpenSelect ? { transform: 'rotate(180deg)' } : {}
    return (
      <div
        className='com-select__selection'
        onClick={this.handleTriggleSelectShow}
      >
        <span
          className='com-select__selection-text'
          data-value={selectOption.value}
        >
          {selectOption.text}
        </span>
        <Icon type='icon-bottom' style={_styleArrow} />
      </div>
    )
  }

  /**
   * 渲染下拉菜单项
   */
  renderOptions() {
    return this.props.options ?
       this.props.options.map((item, index) => (
        <li
          key={index}
          className={classNames(
            'com-select__menu-item',
            { 'is-selected': this.state.selectOption.value === item.value }
          )}
          onClick={() => { this.onClickItem(item.value) }}
          data-value={item.value}
        >
          {
            item.icon && item.icon.length && <Icon type={item.icon} />
          }
          <p className='com-select__menu-text'>{item.text}</p>
        </li>
      ))
      : <div>无内容</div>
  }

  render() {
    const { placement, selectWidth, size, isDisabled } = this.props
    const { isOpenSelect } = this.state
    const _mainTrigger = this.renderTriggerButton()
    const _options = this.renderOptions()
    const _selectId = UTIL.getRandomId()

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
          'com-select',
          { [`com-select--${size}`]: size !== 'middle' },
          { 'is-disabled': isDisabled }
        )}
        ref='select'
        data-id={_selectId}
      >
        {/* 主按钮 */}
        {_mainTrigger}

        {/* 下拉菜单 */}
        {isOpenSelect && (
          <div
            className={`com-select__menu ${placementClassName}`}
            style={{
              width: selectWidth
                ? selectWidth
                : '100%'
            }}
          >
            <ul className='com-select__menu-list'>
              {_options}
            </ul>
          </div>
        )}

      </div>
    )
  }
}
