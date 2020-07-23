import { Map } from 'immutable'

// ====== Constant ====== //
import storeStatusConstants from '../../../common/utils/storeStatusConstants'

const initialState = Map({
  status: storeStatusConstants.loginStatus.LOGGED_OUT, // 当前登录状态
  message: '' // 登录提示信息，一般显示错误信息
  // loginGo2Url: '', // 登录后跳转的路由
})

export default initialState
