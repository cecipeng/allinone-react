// ====== Constant ====== //
import { actionTypes } from '../utils/constants'

// ----------------- action creator
export const action = () => {
  return {
    type: actionTypes.HIDDEN_MASK
  }
}

// ----------------- reducer
export const reducer = (state, action) => {
  
  switch (action.type) {
  case actionTypes.HIDDEN_MASK: {
    let currentCallMaskCount = state.get('callMaskCount')
    currentCallMaskCount--
    if(currentCallMaskCount <= 0) {
      return state.set('isShowMask', false).set('callMaskCount', 0)
    } else {
      return state.set('callMaskCount', currentCallMaskCount)
    }
  }
  default:
    return state
  }
}
