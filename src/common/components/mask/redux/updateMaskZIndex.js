import { actionTypes } from '../utils/constants'

// action creator
export const action = maskZIndex => {
  return {
    type: actionTypes.UPDATE_MASK_ZIndex,
    maskZIndex
  }
}

// reducer
export const reducer = (state, action) => {
  switch (action.type) {
  case actionTypes.UPDATE_MASK_ZIndex:
    return {
      ...state,
      maskZIndex: action.maskZIndex
    }
  default:
    return state
  }
}
