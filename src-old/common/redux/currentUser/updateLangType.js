// ====== Constant ====== //
import { actionTypes } from './utils/constants'
import apiStatusCodeConstants from '../../utils/apiStatusCodeConstants'

// ====== Api ====== //
import updateLangTypeApi from './utils/api'

// ====== Util ====== //
import UTIL from '../../utils/utils'

// ----------------- action creator
const updateLangTypeSuccessAction = newLang => ({
  type: actionTypes.UPDATE_LANG_TYPE,
  payload: newLang
})

// thunk
export const action = params => {
  return function(dispatch) {
    return updateLangTypeApi(params).then(response => {
      const _meta = response.data.meta
      if (_meta.code === apiStatusCodeConstants.REQUEST_SUCCESS) {
        // 1. 存储信息 => localStorage
        UTIL.setLangTypeToLocalstorage(params.langType)

        // 2. 存储信息 => redux
        dispatch(updateLangTypeSuccessAction(params.langType))
      }
    })
  }
}

// ----------------- reducer
export const reducer = (state, action) => {
  switch (action.type) {
  case actionTypes.UPDATE_LANG_TYPE:
    return state.set('langType', action.payload)
  default:
    return state
  }
}
