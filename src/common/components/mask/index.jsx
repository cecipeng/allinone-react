import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from './redux/actions'
export class Mask extends React.Component {
    render() {
        return (
            <React.Fragment>
                {
                    this.props.isShowMask && <div class="com-modalMask" />
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
      action: bindActionCreators({ ...actions }, dispatch)
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Mask)
  