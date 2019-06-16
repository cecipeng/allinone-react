import { combineReducers } from 'redux'
import userInfoReducer from '../features/Login/redux/reducer'
import maskReducer from '../common/components/mask/redux/reducer'

const reducerMap = {
  userInfo : userInfoReducer,
  mask : maskReducer
};

export default combineReducers(reducerMap);