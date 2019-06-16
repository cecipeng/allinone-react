import { UPDATE_MASK_ZIndex } from './actionTypes';

// action creator
export function updateMaskZIndex(maskZIndex) {
    return {
        type: UPDATE_MASK_ZIndex,
        maskZIndex
    }
}

// reducer
export function reducer(state,action) {
    switch(action.type) {
        case UPDATE_MASK_ZIndex:
            return {
                ...state,
                maskZIndex: action.maskZIndex
            }
        default: return state
    }
}
