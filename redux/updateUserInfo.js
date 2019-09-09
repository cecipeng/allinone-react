import { UPDATE_USER_INFO } from './actionTypes';

// action creator
export function updateUserInfo(userInfo) {
    return {
        type: UPDATE_USER_INFO,
        userInfo: userInfo
    }
}

// reducer
export function reducer(state,action) {
    switch(action.type) {
        case UPDATE_USER_INFO:
            return {
                ...state,
                userInfo: action.userInfo
            }
        default: return state
    }
}
