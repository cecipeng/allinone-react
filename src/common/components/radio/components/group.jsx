import React from 'react'
import Radio from './radio'
import classNames from 'classNames'

export default class RadioGroup extends React.Component {
    constructor (props) {
        super(props)

        this.state = {
            value: ''
        }

        this.radioList = this.props.radioList
        this.renderRadioList = this.renderRadioList.bind(this)
        this.initValue = this.initValue.bind(this)
        this.updateValue = this.updateValue.bind(this)

    }
    static defaultProps = {
        // radioList: [], // Radio组配置信息
        // value: '', // Radio组选中值
        type: 'radio', // Radio组样式类型
        buttonSize: 'middle', // Radio组大小（'large'/'middle'/'small'）（仅type='button'时有效）
        isDisabledAll: false, // 是否全部禁用
        onChange: ()=>{}, // 选项变化时的回调函数
    }

    componentWillMount () {
        // 初始化value
        this.initValue()
    }
    initValue () {
        const _props = this.props
        let _radioList = []
        let _value

        if (this.radioList && this.radioList.length > 0) {
            _radioList = this.radioList
        } 
        // else if (_props.children) {
        //     React.Children.map(_props.children, (child, index) => {
        //         _radioList.push({
        //             text: child.props.children,
        //             isDisabled : child.props.isDisabled,
        //             value: child.props.value || index
        //         })
        //     })
        //     this.radioList = _radioList
        // }
        if ('value' in _props && _radioList.some((item) => {return item.value === _props.value})) {
            _value = _props.value
        } else if ('defaultValue' in _props && _radioList.some((item) => {return item.value === _props.defaultValue})) {
            _value = _props.defaultValue
        } else {
            _value = _radioList[0].value
        }
        this.updateValue(_value)
    }
    updateValue (newVal) {
        this.setState({
            value: newVal
        })
        const callback = this.props.onChange
        typeof callback === 'function' && callback(newVal)
    }
    renderRadioList () {
        let _ListDom
        const _radioList = this.radioList
        if (_radioList && _radioList.length > 0) {
            _ListDom = _radioList.map((item, index) => {
                return (
                    <Radio
                        key = {index}
                        value = {item.value}
                        isCheck = {this.state.value === item.value}
                        icon = {item.icon}
                        isDisabled = {this.props.isDisabledAll ? true : item.isDisabled}
                        changeCallback = { this.updateValue }
                    >{item.text}</Radio>
                )
            })
            return _ListDom;
        }
    }
    render() {
        return (
            <div className = {
                    classNames(
                        'com-radio-group',
                        {[`com-radio-group--${this.props.buttonSize}`] : this.props.buttonSize !== 'middle'},
                        { 'com-radio-group--button' : this.props.type === 'button' }
                    )
                }
            >
                {
                    this.renderRadioList()
                }
            </div>
        )
    }
}
