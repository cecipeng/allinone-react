import React from 'react'
import classNames from 'classnames'

export default class Radio extends React.Component {
  static defaultProps = {
    value: '', // 值
    icon: '', // 图标（仅radio组中type='button'时有效），与样式中com-radio__icon--XX对应
    isCheck: false, // 是否选中
    isDisabled: false // 是否禁用
  }

  constructor(props) {
    super(props)

    this.state = {
      isCheck: props.isCheck // 是否选中
    }

    this.onChangeState = this.onChangeState.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.isCheck !== nextProps.isCheck) {
      this.setState({
        isCheck: nextProps.isCheck
      })
    }
  }

  onChangeState() {
    const callback = this.props.changeCallback
    if (!this.props.isDisabled) {
      if (typeof callback === 'function') {
        callback(this.props.value)
      }
      this.setState({
        isCheck: true
      })
    }
  }
  render() {
    // 设置图标
    const _iconClassName = classNames(
      'com-radio__icon',
      {
        [`com-radio__icon--${this.props.icon}`]: this.props.icon !== undefined
      })
    return (
      <label
        className={classNames(
          'com-radio',
          { 'is-checked': this.state.isCheck },
          { 'is-disabled': this.props.isDisabled }
        )}
        onClick={this.onChangeState}
        data-value={this.props.value}
      >
        <span className="com-radio__btn" />
        {this.props.icon && <span className={_iconClassName} />}
        {this.props.children ? (
          <span className="com-radio__con">{this.props.children}</span>
        ) : null}
      </label>
    )
  }
}
