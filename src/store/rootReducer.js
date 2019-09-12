import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

// ====== Reducer ====== //
import currentUserReducer from '../common/redux/currentUser/reducer'
// import maskReducer from '../common/components/mask/redux/reducer'

// ====== Constant ====== //
import { reducerNameConstants } from '../common/utils/reducerNameConstants'


const reducerMap = {
  [reducerNameConstants.CURRENT_USER_REDUCER] : currentUserReducer,
  // maskReducer : maskReducer,
  form: formReducer
};

export default combineReducers(reducerMap);