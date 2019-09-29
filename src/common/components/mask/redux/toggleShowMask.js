import { actionTypes } from '../utils/constants'

// action creator
export const action = isShowMask => {
  return {
    type: actionTypes.TOGGLE_SHOW_MASK,
    isShowMask
  }
}

// reducer
export const reducer = (state, action) => {
  // switch (action.type) {
  // case actionTypes.TOGGLE_SHOW_MASK:
  //   console.log(state)
  //   const new1 = {
  //     isShowMask: state.isShowMask ? true : action.isShowMask,
  //     ...state
  //   }
  //   console.log(new1)
  //   return new1
  // default:
  //   return state
  // }
}
