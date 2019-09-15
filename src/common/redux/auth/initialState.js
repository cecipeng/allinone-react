// ====== Constant ====== //
import storeStatusConstants from '../../utils/storeStatusConstants';

const initialState = {
    // 是否登录的认证
    loginAuth: {
        token: '',
        loginStatus: storeStatusConstants.loginStatus.LOGGED_OUT, // 当前登录状态
        loginMessage: '', // 登录提示信息，一般显示错误信息
    }
}
  
export default initialState;