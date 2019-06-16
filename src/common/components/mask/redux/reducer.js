import initialState from './initialState'
import { reducer as updateShowMask } from './updateShowMask'
import { reducer as updateMaskZIndex } from './updateMaskZIndex'

const reducers = [
  updateShowMask,
  updateMaskZIndex
];

export default function reducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    default:
      newState = state;
      break;
  }
  return reducers.reduce((s, r) => r(s, action), newState);
}
