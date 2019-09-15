// ====== Constant ====== //
import { actionTypes } from './utils/constants';

// ----------------- action creator
export const action = (token) => ({
    type      : actionTypes.LOGIN_AUTH,
    payload   : {
        token: token
    }
})

// ----------------- reducer
export const reducer = (state, action) => {
    switch(action.type) {
        case actionTypes.LOGIN_AUTH:
            return {
                ...state,
                loginAuth: action.payload
            }
        default: return state
    }
}
