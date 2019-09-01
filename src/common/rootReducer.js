import { combineReducers } from 'redux'
import userInfoReducer from '../features/Login/redux/reducer'
import maskReducer from '../common/components/mask/redux/reducer'
import { reducer as formReducer } from 'redux-form'

const reducerMap = {
  userInfo : userInfoReducer,
  mask : maskReducer,
  form: formReducer
};

export default combineReducers(reducerMap);