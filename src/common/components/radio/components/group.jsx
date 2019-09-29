import React from 'react'
import classNames from 'classnames'
import Radio from './radio'

export default class RadioGroup extends React.Component {
  static defaultProps = {
    radioList: [], // Radio组配置信息
    value: '', // Radio组选中值
    type: 'radio', // Radio组样式类型
    buttonSize: 'middle', // Radio组大小（'large'/'middle'/'small'）（仅type='button'时有效）
    isDisabledAll: false, // 是否全部禁用
    onChange: () => {} // 选项变化时的回调函数
  }
  constructor(props) {
    super(props)

    this.state = {
      value: ''
    }

    this.radioList = (props.radioList && props.radioList.length) ? props.radioList : []

    this.renderRadioList = this.renderRadioList.bind(this)
    this.initValue = this.initValue.bind(this)
    this.updateValue = this.updateValue.bind(this)
  }

  componentWillMount() {
    this.initValue()
  }

  /**
   * 初始化value
   */
  initValue() {
    const { value } = this.props // 父级传入的选中值
    let _value // 按钮组实际选中的值

    if (value &&
      this.radioList.some(item => {
        return item.value === value
      })
    ) {
      _value = value
    } else {
      _value = this.radioList[0].value // 未传props.value则使用第一个的值
    }

    this.updateValue(_value)
  }

  /**
   * 设置选中的值
   * @param {any} newVal 
   */
  updateValue(newVal) {
    this.setState({
      value: newVal
    })
    const callback = this.props.onChange
    typeof callback === 'function' && callback(newVal)
  }

  /**
   * 渲染radio列表
   */
  renderRadioList() {
    if (this.radioList && this.radioList.length) {
      return this.radioList.map((item, index) => {
        return (
          <Radio
            key={index}
            value={item.value}
            isCheck={this.state.value === item.value}
            icon={item.icon}
            isDisabled={this.props.isDisabledAll ? true : item.isDisabled}
            changeCallback={this.updateValue}
          >
            {item.text}
          </Radio>
        )
      })
    }
  }

  render() {
    const { buttonSize, type } = this.props
    return (
      <div
        className={classNames(
          'com-radio-group',
          {[`com-radio-group--${buttonSize}`]: type === 'button' && buttonSize !== 'middle' },
          { 'com-radio-group--button': type === 'button' }
        )}
      >
        {this.renderRadioList()}
      </div>
    )
  }
}
