// ====== Constant ====== //
import { actionTypes } from '../utils/constants'

// ----------------- action creator
export const action = () => {
  return {
    type: actionTypes.SHOW_MASK
  }
}

// ----------------- reducer
export const reducer = (state, action) => {
  
  switch (action.type) {
  case actionTypes.SHOW_MASK: {
    let currentCallMaskCount = state.get('callMaskCount')
    currentCallMaskCount++
    return state.set('isShowMask', true).set('callMaskCount', currentCallMaskCount)
  }
    
  default:
    return state
  }
}
