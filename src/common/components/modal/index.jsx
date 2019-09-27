import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from '../mask/redux/actions'

export class Modal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isVisible: props.isVisible
    }

    this.onOk = this.onOk.bind(this)
    this.onCancel = this.onCancel.bind(this)
    this.onAfterClose = this.onAfterClose.bind(this)
    this.onMaskClick = this.onMaskClick.bind(this)
    this._closeModal = this._closeModal.bind(this)
  }
  componentDidMount () {
    // 设置是否显示遮罩
    const _isShowMask = this.props.isMask
    this.props.actions.toggleShowMask(_isShowMask)
  }
  componentWillUnmount() {
    console.log('componentWillUnmount');
}
  static defaultProps = {
    container: document.getElementsByTagName('body'),
    title: '标题', // 标题内容
    okBtn: '确定', // 确定按钮内容
    cancelBtn: '取消', // 取消按钮内容
    // okBtnProps: '', // 确定按钮的props配置（参考button的props） ——？
    // cancelBtnProps: '', // 取消按钮的props配置（参考button的props） ——？
    isVisible: false, // 弹窗是否可见
    style: {}, // modal的自定义样式
    bodyStyle: {}, // body的自定义样式
    width: 520, // 宽度
    zIndex: 101, // 显示层级
    isCentered: true, // 是否垂直居中显示
    isMask: true, // 是否展示遮罩
    isCancelBtn: true, // 是否显示取消按钮
    isMaskClosable: true, // 是否点击蒙层关闭modal
    isClosable: true, // 是否显示右上角的关闭按钮
    isHeader: true, // 是否显示头部
    isFooter: true, // 是否显示底部
    okBtnCallback: null, // 确定按钮的回调
    cancelBtnCallback: null, // 点击遮罩层或右上角叉或取消按钮的回调
    afterCloseCallback: null, // 完全关闭后的回调
  }
  onOk () {
    this._closeModal()
    const okCallback = this.props.okBtnCallback
    const callback = this.props.afterCloseCallback
    typeof okCallback === 'function' && okCallback()
    typeof callback === 'function' && callback()
  }
  onCancel () {
    this._closeModal()
    const cancelCallback = this.props.cancelBtnCallback
    const callback = this.props.afterCloseCallback
    typeof cancelCallback === 'function' && cancelCallback()
    typeof callback === 'function' && callback()
  }

  /**
   * 点击弹窗外关闭弹窗
   */
  onMaskClick (e) {
    if (e.target === e.currentTarget && this.props.isMaskClosable) {
      this._closeModal(e);
    }
  }
  _closeModal () {
    this.setState({
      isVisible: false
    })
  }
  onAfterClose () {
    const callback = this.props.afterCloseCallback
    typeof callback === 'function' && callback()
  }
  renderFooter () {
    const { okBtn, cancelBtn, isFooter, isCancelBtn } = this.props
    if (isFooter) {
      return (
        <div className='modal-footer'>
          {
            isCancelBtn && <span onClick={this.onCancel} className='ui-btn ui-btn-default'>{cancelBtn}</span>
          }
          <span onClick={this.onOk} className='ui-btn ui-btn-main'>{okBtn}</s>
        </div>
      )
    }
  }
  render () {
    return (
      <React.Fragment>
        {
          this.state.isVisible ? <div className='ui-modal' onClick={this.onMaskClick} style={this.props.style} style={{
            zIndex: this.props.zIndex
          }}>
            <div className='' style={{ width: this.props.width }} className={`modal-dialog ${this.props.isCentered && 'is-centered'}`}>
              {
                this.props.isClosable && <a className='close-modal' onClick={this.onCancel} />
              }
              {/* 头部 */}
              {
                this.props.isHeader && (
                  <div className='modal-header'>
                    <p className='title'>{this.props.title}</p>
                  </div>
                )
              }

              {/* 头部 */}

              {/* 内容区域 */}
              <div className='modal-body' style={this.props.bodyStyle}>
                {
                  this.props.children ? this.props.children : <p className='notice'>modal.text</p>
                }
              </div>
              {/* 内容区域 */}

              {/* 尾部,操作按钮 */}
              {
                this.renderFooter()
              }
              {/* 尾部,操作按钮 */}
            </div>
          </div>
          : null
        }
      </React.Fragment>
    )
  }
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...actions }, dispatch)
  }
}
export default connect(null, mapDispatchToProps)(Modal)
