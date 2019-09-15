// ====== initialState ====== //
import currentUserInitialState from '../common/redux/currentUser/initialState'
import loginInitialState from '../features/Login/redux/initialState'

// ====== Constants ====== //
import reducerNameConstants from '../common/utils/reducerNameConstants'

const initialState = {}

initialState[reducerNameConstants.CURRENT_USER_REDUCER] = currentUserInitialState
initialState[reducerNameConstants.LOGIN_REDUCER] = loginInitialState

export default initialState