import React from 'react'
import intl from 'react-intl-universal'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

// ====== Action ====== //
import * as maskActionCreator from '../mask/redux/actions'

export class Modal extends React.Component {
  static defaultProps = {
    container: document.getElementsByTagName('body'), // modal挂载的html节点 ??????
    title: '', // 标题内容
    okBtn: '', // 确定按钮内容
    cancelBtn: '', // 取消按钮内容
    okBtnProps: '', // 确定按钮的props配置（参考button的props）  ?????
    cancelBtnProps: '', // 取消按钮的props配置（参考button的props）  ???????
    isVisible: false, // 弹窗是否可见
    custormStyle: {}, // modal的自定义样式
    bodyStyle: {}, // body的自定义样式
    width: 520, // 宽度
    zIndex: 101, // 显示层级
    isCentered: true, // 是否垂直居中显示
    isMask: true, // 是否展示遮罩
    isCancelBtn: true, // 是否显示取消按钮
    isMaskClosable: false, // 是否点击蒙层关闭modal
    isClosable: true, // 是否显示右上角的关闭按钮
    isHeader: true, // 是否显示头部
    isFooter: true, // 是否显示底部
    okBtnCallback: () => {}, // 确定按钮的回调
    cancelBtnCallback: () => {}, // 点击遮罩层或右上角叉或取消按钮的回调
    afterCloseCallback: () => {} // 完全关闭后的回调
  }

  constructor(props) {
    super(props)
    this.state = {
      isVisible: props.isVisible // 弹窗是否可见
    }

    this.onOk = this.onOk.bind(this)
    this.onCancel = this.onCancel.bind(this)
    this.onMaskClick = this.onMaskClick.bind(this)
    this._closeModal = this._closeModal.bind(this)
    this.renderFooter = this.renderFooter.bind(this)
  }

  componentDidMount() {
    const { isMask, maskAction } = this.props

    // 设置是否显示遮罩
    isMask && maskAction.showMaskAction()
  }
  componentWillUnmount() {
    console.log('componentWillUnmount')
  }

  /**
   * 点击确认按钮
   */
  onOk() {
    const { okBtnCallback, afterCloseCallback } = this.props
    this._closeModal()
    typeof okBtnCallback === 'function' && okBtnCallback()
    typeof afterCloseCallback === 'function' && afterCloseCallback()
  }

  /**
   * 点击取消按钮
   */
  onCancel() {
    const { cancelBtnCallback, afterCloseCallback } = this.props
    this._closeModal()
    typeof cancelBtnCallback === 'function' && cancelBtnCallback()
    typeof afterCloseCallback === 'function' && afterCloseCallback()
  }

  /**
   * 点击弹窗外关闭弹窗
   */
  onMaskClick(e) {
    if (e.target === e.currentTarget && this.props.isMaskClosable) {
      this._closeModal()
    }
  }

  /**
   * 关闭弹窗
   */
  _closeModal() {
    const { isMask, maskAction } = this.props

    // 关闭遮罩（弹窗实例定义了要显示遮罩，才做关闭操作，避免多弹窗下误关遮罩）
    isMask && maskAction.hiddenMaskAction()

    this.setState({
      isVisible: false
    })
  }

  /**
   * 渲染底部
   */
  renderFooter() {
    const { okBtn, cancelBtn, isFooter, isCancelBtn } = this.props
    if (isFooter) {
      return (
        <div className="modal-footer">
          {isCancelBtn && (
            <span onClick={this.onCancel} className="ui-btn ui-btn-default">
              {cancelBtn || intl.get('COMPONENT_MODAL_CANCEL_BTN')}
            </span>
          )}
          <span onClick={this.onOk} className="ui-btn ui-btn-main">
            {okBtn || intl.get('COMPONENT_MODAL_SUBMIT_BTN')}
          </span>
        </div>
      )
    }
  }

  render() {
    const { custormStyle, zIndex, width, isCentered, isClosable, isHeader, title, bodyStyle, children } = this.props
    const { isVisible } = this.state

    return (
      <React.Fragment>
        {isVisible && (
          <div
            className="ui-modal"
            onClick={this.onMaskClick}
            style={{
              zIndex: zIndex,
              custormStyle
            }}
          >
            <div
              style={{ width: width }}
              className={`modal-dialog ${isCentered && 'is-centered'}`}
            >
              {isClosable && (
                <span className="close-modal" onClick={this.onCancel} />
              )}
              {/* 头部 */}
              {isHeader && (
                <div className="modal-header">
                  <p className="title">{title || intl.get('COMPONENT_MODAL_TITLE')}</p>
                </div>
              )}

              {/* 内容区域 */}
              <div className="modal-body" style={bodyStyle}>
                {children ? (
                  children
                ) : (
                  <p className="notice">modal.text</p>
                )}
              </div>

              {/* 尾部,操作按钮 */}
              {this.renderFooter()}
            </div>
          </div>
        )}
      </React.Fragment>
    )
  }
}
function mapDispatchToProps(dispatch) {
  return {
    maskAction: bindActionCreators(maskActionCreator, dispatch)
  }
}
export default connect(
  null,
  mapDispatchToProps
)(Modal)
