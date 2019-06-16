import { UPDATE_SHOW_MASK } from './actionTypes';

// action creator
export function updateShowMask(isShowMask) {
    return {
        type: UPDATE_SHOW_MASK,
        isShowMask
    }
}

// reducer
export function reducer(state,action) {
    switch(action.type) {
        case UPDATE_SHOW_MASK:
            return {
                ...state,
                isShowMask: action.isShowMask
            }
        default: return state
    }
}
