// ====== Constant ====== //
import { actionTypes } from './utils/constants'

// ----------------- action creator
export const action = langType => ({
  type: actionTypes.UPDATE_LANG_TYPE,
  payload: langType
})

// ----------------- reducer
export const reducer = (state, action) => {
  switch (action.type) {
  case actionTypes.UPDATE_LANG_TYPE:
    return state.set('langType', action.payload)
  default:
    return state
  }
}
