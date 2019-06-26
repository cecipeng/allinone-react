import React from 'react'
import classNames from 'classNames'
export default class Select extends React.Component {
    constructor (props) {
        super(props)

        this.state = {
            selectOption: {
                value: '',
                text: ''
            }
        }
        this.renderTriggerButton = this.renderTriggerButton.bind(this)
        this.renderOptions = this.renderOptions.bind(this)
        this.setSelectOption = this.setSelectOption.bind(this)
    }

    static defaultProps = {
        placement: 'bottomLeft', // 菜单弹出位置，bottomLeft bottomCenter bottomRight topLeft topCenter topRight
        isDisabled: false, // 是否禁用
        trigger: 'hover', // 触发下拉的行为, 移动端不支持 hover   click|hover
        size: 'middle', // 默认按钮大小  'large'/'middle'/'small'
        matchSelectWidth: true, // 下拉菜单和选择器同宽
        defaultValue: '', // 指定默认选中的条目的value，使用默认按钮时生效
        dropdownRender: '', // 自定义下拉框内容
        maxCount: 5, // 最多显示几个option
        options: [// 下拉菜单配置
            {
                text: '', // 显示内容
                value: '', // 选项value值
            }
        ], 
    }
    componentWillMount () {
        this.setSelectOption(this.props.defaultValue)
    }
    setSelectOption (value) {
        console.log(value);
        
        let _value = value || this.props.options[0].value
        let _text
        this.props.options.forEach((item, index) => {
            if (item.value === _value) {
                _text = item.text
            }
        })
        this.setState({
            selectOption: {
                value: _value,
                text: _text
            }
        })
    }
    renderTriggerButton () {
        if (this.props.children) {
            return this.props.children
        } else {
            return (
                <a className='btn-rel'>
                    <span className='selector-btn' data-value={this.state.selectOption.value}>{this.state.selectOption.text}</span>
                    <i className='dropdown-arrow'></i>
                </a>
            )
        }
    }
    renderOptions () {
        const _optionsDom = this.props.options.map((item, index) => (
            <li className={this.state.selectOption.value===item.value && 'selected'} onClick={this.setSelectOption.bind(this,item.value)} data-value={item.value}>
                <a className='dropitem'>{item.text}</a>
            </li>
        ))
        return (
            <ul className='droplist'>
                { _optionsDom }
            </ul>
        )
    }
    render() {
        const _mainTrigger = this.renderTriggerButton()
        const _options = this.renderOptions()
        return (
            <div className='ui-dropdown'>
		        <div className='dropdown-mainlink'>
                    {
                        _mainTrigger
                    }
		        </div>
                <div className='dropdown-list'>
                    {
                        _options
                    }
                </div>
	        </div>
        )
    }
}
