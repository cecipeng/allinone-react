import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

// ====== Reducer ====== //
import currentUserReducer from '../common/redux/currentUser/reducer'
import authReducer from '../common/redux/auth/reducer'
import maskReducer from '../common/components/mask/redux/reducer'
import loginReducer from '../features/Login/redux/reducer'

// ====== Constant ====== //
import reducerNameConstants from '../common/utils/reducerNameConstants'

const reducerMap = {
  // common
  [reducerNameConstants.CURRENT_USER_REDUCER] : currentUserReducer,
  [reducerNameConstants.AUTH_REDUCER] : authReducer,

  // component
  [reducerNameConstants.MASK_REDUCER] : maskReducer,

  // feature
  [reducerNameConstants.LOGIN_REDUCER] : loginReducer,

  form: formReducer
}

export default combineReducers(reducerMap)
