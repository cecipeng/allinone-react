import { combineReducers } from 'redux'
import loginReducer from '../features/Login/redux/reducer'

const reducerMap = {
  userInfo: loginReducer
};

export default combineReducers(reducerMap);