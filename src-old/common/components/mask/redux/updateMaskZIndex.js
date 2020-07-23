// ====== Constant ====== //
import { actionTypes } from '../utils/constants'

// action creator
export const action = maskZIndex => {
  return {
    type: actionTypes.UPDATE_MASK_ZIndex,
    payload: maskZIndex
  }
}

// reducer
export const reducer = (state, action) => {
  switch (action.type) {
  case actionTypes.UPDATE_MASK_ZIndex:
    return state.set('maskZIndex', action.payload)
  default:
    return state
  }
}
