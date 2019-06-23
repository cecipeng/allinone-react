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
            console.log(state);
            
            var new1 = {
                ...state,
                isShowMask: state.isShowMask ? true : action.isShowMask
            }
            
            console.log(new1);
            
            return new1
        default: return state
    }
}
