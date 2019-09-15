import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

// ====== Reducer ====== //
import currentUserReducer from '../common/redux/currentUser/reducer'
import loginReducer from '../features/Login/redux/reducer'

// ====== Constant ====== //
import reducerNameConstants from '../common/utils/reducerNameConstants'


const reducerMap = {
  [reducerNameConstants.CURRENT_USER_REDUCER] : currentUserReducer,
  loginReducer : loginReducer,
  form: formReducer
};

export default combineReducers(reducerMap);