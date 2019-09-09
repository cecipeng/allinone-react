import { actionTypes } from '../utils/constants';

// action creator
export const action = (isShowMask) => {
    return {
        type: actionTypes.TOGGLE_SHOW_MASK,
        isShowMask
    }
}

// reducer
export const reducer = (state, action) => {
    switch(action.type) {
        case actionTypes.TOGGLE_SHOW_MASK:
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
