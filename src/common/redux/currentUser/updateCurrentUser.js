// ====== Constant ====== //
import { actionTypes } from "./utils/constants";

// ----------------- action creator
export const action = currentUser => ({
  type: actionTypes.UPDATE_CURRENT_USER,
  payload: currentUser
});

// ----------------- reducer
export const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_CURRENT_USER:
      return action.payload;
    default:
      return state;
  }
};
