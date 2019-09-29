// ====== Constant ====== //
import { actionTypes } from './utils/constants'

// ----------------- action creator
export const action = token => ({
  type: actionTypes.UPDATE_USER_LOGIN_TOKEN,
  payload: token
})

// ----------------- reducer
export const reducer = (state, action) => {
  switch (action.type) {
  case actionTypes.UPDATE_USER_LOGIN_TOKEN:
    return state.setIn(['userLoginAuth', 'token'], action.payload)
  default:
    return state
  }
}
