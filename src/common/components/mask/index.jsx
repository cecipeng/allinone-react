import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

// ====== Constant ====== //
import reducerNameConstants from '../../utils/reducerNameConstants'

// ====== Action ====== //
import * as maskActionCreator from './redux/actions'

class Mask extends React.Component {
  render() {
    const { maskReducer } = this.props
    const isShowMask = maskReducer.get('isShowMask')
    const maskZIndex = maskReducer.get('maskZIndex')
    
    return (
      <React.Fragment>
        {isShowMask && <div className='com-modalMask' style={{zIndex: maskZIndex}} />}
      </React.Fragment>
    )
  }
}

function mapStateToProps(state) {
  return {
    maskReducer: state[reducerNameConstants.MASK_REDUCER]
  }
}

function mapDispatchToProps(dispatch) {
  return {
    maskAction: bindActionCreators(maskActionCreator, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Mask)
