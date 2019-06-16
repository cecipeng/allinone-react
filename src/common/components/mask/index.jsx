import React from 'react'
import { connect } from 'react-redux'
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
  
  export default connect(mapStateToProps)(Mask)