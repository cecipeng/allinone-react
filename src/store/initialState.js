// ====== initialState ====== //
import currentUserInitialState from '../common/redux/currentUser/initialState'

// ====== Constants ====== //
import { reducerNameConstants } from '../common/utils/constants'

const initialState = {}

initialState[reducerNameConstants.CURRENT_USER_REDUCER] = currentUserInitialState

export default initialState