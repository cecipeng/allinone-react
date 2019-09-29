import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

// ====== Reducer ====== //
import currentUserReducer from '../common/redux/currentUser/reducer'
import authReducer from '../common/redux/auth/reducer'
import loginReducer from '../features/Login/redux/reducer'

// ====== Constant ====== //
import reducerNameConstants from '../common/utils/reducerNameConstants'


const reducerMap = {
  [reducerNameConstants.CURRENT_USER_REDUCER] : currentUserReducer,
  [reducerNameConstants.AUTH_REDUCER] : authReducer,
  [reducerNameConstants.LOGIN_REDUCER] : loginReducer,
  form: formReducer
};

export default combineReducers(reducerMap)
