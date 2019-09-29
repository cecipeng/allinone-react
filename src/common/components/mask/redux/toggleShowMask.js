// ====== Constant ====== //
import { actionTypes } from '../utils/constants'

// ----------------- action creator
export const action = isShowMask => {
  return {
    type: actionTypes.TOGGLE_SHOW_MASK,
    payload: isShowMask
  }
}

// ----------------- reducer
export const reducer = (state, action) => {
  const currentMaskStatus = state.get('isShowMask')
  const isShowMask = currentMaskStatus ? true : action.payload // 当前已显示遮罩，并且本次仍然是做显示操作，则
  switch (action.type) {
  case actionTypes.TOGGLE_SHOW_MASK:
    return state.set('isShowMask', isShowMask)
  default:
    return state
  }
}
