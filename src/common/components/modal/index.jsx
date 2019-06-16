import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from '../mask/redux/actions'
/**
 * props :
 * container : modal挂载的html节点
 * titleText : string | ReactNode = '标题' 标题的文字
 * okText : string | ReactNode = '确定' 确定按钮的文字
 * cancelText : string | ReactNode = '取消' 取消按钮的文字
 * footer: string | ReactNode | null = 确定和取消的按钮node 底部内容，不需要时设置null
 * isVisible : boolean = false 是否可见
 * style : object = {} modal的其他样式
 * bodyStyle : object = {} body的样式
 * width : string | number = 520 宽度
 * zIndex : number = 100 显示层级
 * isCentered : boolean = false 是否垂直居中显示
 * isMask : boolean = true 是否展示遮罩
 * isMaskClosable : boolean = true 是否点击蒙层关闭modal
 * isClosable : boolean = true 是否显示右上角的关闭按钮
 * isDestroyOnClose : boolean = false 关闭时销毁modal
 * okBtnCallback : function = 无 确定按钮的回调
 * cancelBtnCallback : function = 无 点击遮罩层或右上角叉或取消按钮的回调
 * afterCloseCallback : function = 无 完全关闭后的回调
 * 
 */
export class Modal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isVisible: props.isVisible
    }

    this.onOk = this.onOk.bind(this)
    this.onCancel = this.onCancel.bind(this)
    this.onAfterClose = this.onAfterClose.bind(this)
    this._closeModal = this._closeModal.bind(this)
  }
  componentDidMount () {
    const _isShowMask = this.props.isMask
    this.props.actions.updateShowMask(_isShowMask)
  }
  static defaultProps = {
    container: document.getElementsByTagName('body'),
    titleText: '标题', // 标题的文字 ——
    okText: '确定', // 确定按钮的文字 ——
    cancelText: '取消', // 取消按钮的文字 ——
    isVisible: false, // 是否可见
    style: {}, // modal的其他样式 ——
    bodyStyle: {}, // body的样式 ——
    width: 520, // 宽度 ——
    zIndex: 101, // 显示层级 ——
    isCentered: true, // 是否垂直居中显示 ——
    isMask: true, // 是否展示遮罩
    isCancelBtn: true, // 是否显示取消按钮
    isMaskClosable: true, // 是否点击蒙层关闭modal
    isClosable: true, // 是否显示右上角的关闭按钮
    isHeader: true, // 是否显示头部 ——
    isFooter: true, // 是否显示底部 ——
    isDestroyOnClose: false, // 关闭时销毁modal
    okBtnCallback: null, // 确定按钮的回调 ——
    cancelBtnCallback: null, // 点击遮罩层或右上角叉或取消按钮的回调 ——
    afterCloseCallback: null, // 完全关闭后的回调
  }
  onOk() {
    this._closeModal()
    const callback = this.props.okBtnCallback
    typeof callback === 'function' && callback()
  }
  onCancel() {
    this._closeModal()
    const callback = this.props.cancelBtnCallback
    typeof callback === 'function' && callback()
  }
  _closeModal() {
    this.setState({
      isVisible: false
    })
  }
  onAfterClose() {
    const callback = this.props.afterCloseCallback
    typeof callback === 'function' && callback()
  }
  renderFooter() {
    const { okText, cancelText, isFooter, isCancelBtn } = this.props
    if (isFooter) {
      return (
        <div className='modal-footer'>
          {
            isCancelBtn && <a onClick={this.onCancel} href='javascript:void(0)' className='ui-btn ui-btn-default'>{cancelText}</a>
          }
          <a onClick={this.onOk} href='javascript:void(0)' className='ui-btn ui-btn-main'>{okText}</a>
        </div>
      )
    }
  }
  render() {
    return (
      <React.Fragment>
        {
          this.state.isVisible && <div className='ui-modal' style={this.props.style} style={{
            zIndex: this.props.zIndex
          }}>
            <div className='' style={{ width: this.props.width }} className={`modal-dialog ${this.props.isCentered && 'is-centered'}`}>
              {
                this.props.isClosable && <a className='close-modal' />
              }
              {/* 头部 */}
              {
                this.props.isHeader && (
                  <div className='modal-header'>
                    <p className='title'>{this.props.titleText}</p>
                  </div>
                )
              }

              {/* 头部 */}

              {/* 内容区域 */}
              <div className='modal-body' style={this.props.bodyStyle}>
                <p className='notice'>modal.text</p>
              </div>
              {/* 内容区域 */}

              {/* 尾部,操作按钮 */}
              {
                this.renderFooter()
              }
              {/* 尾部,操作按钮 */}
            </div>
          </div>
        }
      </React.Fragment>
    )
  }
}
function mapStateToProps(state) {
  return state.isShowMask
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...actions }, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Modal)
