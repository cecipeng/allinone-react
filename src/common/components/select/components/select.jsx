import React from 'react'
import classNames from 'classNames'
export default class Select extends React.Component {
    constructor (props) {
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

    static defaultProps = {
        // placement: 'bottomLeft', // 菜单弹出位置，bottomLeft bottomCenter bottomRight topLeft topCenter topRight
        isDisabled: false, // 是否禁用
        // trigger: 'hover', // 触发下拉的行为, 移动端不支持 hover   click|hover
        size: 'middle', // 默认按钮大小  'large'/'middle'/'small'
        dropdownWidth: '', // 下拉菜单宽度，默认为：和选择器同宽
        defaultValue: '', // 指定默认选中的条目的value，使用默认按钮时生效
        // dropdownRender: '', // 自定义下拉框内容
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
    /**
     * 根据传入的value设置选中项
     * @param {any} value 
     */
    setSelectOption (value) {
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

    /**
     * 下拉菜单的显示和隐藏
     */
    handleDropdownShow () {
        if (!this.props.isDisabled) {
            this.setState((oldState) => ({
                isOpenDropdown : !oldState.isOpenDropdown
            }))
        }
    }

    /**
     * 
     */
    onClickItem (value) {
        this.setSelectOption(value)
        this.handleDropdownShow()
    }
    /**
     * 渲染默认按钮
     */
    renderTriggerButton () {
        if (this.props.children) { // 支持自定义DOM
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
    /**
     * 渲染下拉菜单项
     */
    renderOptions () {
        const _optionsDom = this.props.options.map((item, index) => (
            <li key={index} className={this.state.selectOption.value===item.value ? 'selected' : ''} onClick={this.onClickItem.bind(this,item.value)} data-value={item.value}>
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
            <div
                className = {
                    classNames(
                        'ui-dropdown',
                        {[`ui-dropdown--${this.props.size}`] : this.props.size !== 'middle'},
                        { 'is-disabled' : this.props.isDisabled }
                    )
                }
            >
		        <div className='dropdown-mainlink' onClick={this.handleDropdownShow.bind(this)}>
                    {
                        _mainTrigger
                    }
		        </div>
                {
                    this.state.isOpenDropdown && (
                        <div className='dropdown-list' style={{width: this.props.dropdownWidth ? this.props.dropdownWidth : '100%'}}>
                            {
                                _options
                            }
                        </div>
                    )
                }
                
	        </div>
        )
    }
}
