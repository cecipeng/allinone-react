import React from 'react'
import classNames from 'classNames'
export default class Radio extends React.Component {
    constructor (props) {
        super(props)

        this.state = {
            isCheck: props.isCheck
        }
        this.onChangeState = this.onChangeState.bind(this)
    }

    static defaultProps = {
        value: '', // 值
        icon: '', // 图标
        isCheck: false, // 是否选中
        isDisabled: false // 是否禁用
    }
    componentWillReceiveProps (nextProps) {
        if (this.props.isCheck !== nextProps.isCheck) {
            this.setState({
                isCheck: nextProps.isCheck
            });
        }
    }
    onChangeState () {
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
            { [`com-radio__icon--${this.props.icon}`] : this.props.icon !== undefined }
        )
        return (
            <label 
                className = {
                    classNames(
                        'com-radio',
                        { 'is-checked' : this.state.isCheck },
                        { 'is-disabled' : this.props.isDisabled }
                    )
                }
                onClick = {this.onChangeState}
                data-value = {this.props.value}
            >
                <span className="com-radio__btn"></span>
                {
                    this.props.icon && <span className={_iconClassName}></span>
                }
                {
                    this.props.children ? <span className='com-radio__con'>{this.props.children}</span> : null
                }
            </label>
        )
    }
}
