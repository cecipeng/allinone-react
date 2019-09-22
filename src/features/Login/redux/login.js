import intl from 'react-intl-universal'

// ====== Constant ====== //
import { actionTypes } from '../utils/constants'
import routerConstants from '../../../common/utils/routerConstants'
import apiStatusCodeConstants from '../../../common/utils/apiStatusCodeConstants'
import storeStatusConstants from '../../../common/utils/storeStatusConstants'

// ====== Api ====== //
import loginApi from '../utils/api'

// ====== Action ====== //
import * as currentUserAction from '../../../common/redux/currentUser/actions'
import * as authAction from '../../../common/redux/auth/actions'

// ====== Util ====== //
import UTIL from '../../../common/utils/utils'

// ----------------- action creator
// 更新错误信息
const updateLoginStatusAndMessageSuccessAction = (status, msg) => ({
  type: actionTypes.UPDATE_LOGIN_STATUS_AND_MESSAGE,
  payload: {
    status: status,
    message: msg
  }
})
// thunk
export const action = (params, history) => {
  return function(dispatch) {
    return loginApi(params).then(response => {
      const _meta = response.data.meta
      const _data = response.data.datas
      // 验证不通过时
      if (_meta.code === apiStatusCodeConstants.LOGIN_INFO_ERROR) {
        const errorMsg = intl.get('LOGIN_PAGE_MEG_USERNAME_OR_PASSWORD_ERROR')
        // 1. 更新登录状态，返回错误信息
        dispatch(
          updateLoginStatusAndMessageSuccessAction(
            storeStatusConstants.loginStatus.LOGGED_OUT,
            errorMsg
          )
        )
      }
      // 验证通过时
      else if (_meta.code === apiStatusCodeConstants.REQUEST_SUCCESS) {
        // 1. 存储用户信息 => localStorage
        UTIL.setCurrentUserToLocalstorage({
          userId: _data.userId,
          userName: _data.userName,
          userHead: _data.userHead,
          accessToken: _data.accessToken,
          langType: _data.langType,
        })

        // 2. 存储用户信息 => store
        dispatch(currentUserAction.updateCurrentUserAction(_data))

        // 3. 更新登录提示信息
        dispatch(
          updateLoginStatusAndMessageSuccessAction(
            storeStatusConstants.loginStatus.LOGGED_IN,
            _meta.message
          )
        )

        // 4. 存储token
        dispatch(authAction.updateUserLoginTokenAction(_data.accessToken))

        // 5. 跳转到前一个页面或home页
        history.push(routerConstants.DEFAULT_PAGE)
      }
    })
  }
}

// ----------------- reducer
export const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_LOGIN_STATUS_AND_MESSAGE:
      return state
        .set('status', action.payload.status)
        .set('message', action.payload.message)
    default:
      return state
  }
}
