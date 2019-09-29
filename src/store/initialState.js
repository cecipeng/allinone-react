// ====== initialState ====== //
import currentUserInitialState from '../common/redux/currentUser/initialState'
import authInitialState from '../common/redux/auth/initialState'
import maskInitialState from '../common/components/mask/redux/initialState'
import loginInitialState from '../features/Login/redux/initialState'

// ====== Constants ====== //
import reducerNameConstants from '../common/utils/reducerNameConstants'

const initialState = {}

// common
initialState[reducerNameConstants.CURRENT_USER_REDUCER] = currentUserInitialState
initialState[reducerNameConstants.AUTH_REDUCER] = authInitialState

// component
initialState[reducerNameConstants.MASK_REDUCER] = maskInitialState

// feature
initialState[reducerNameConstants.LOGIN_REDUCER] = loginInitialState

export default initialState
