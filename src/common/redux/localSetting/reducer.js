import initialState from './initialState'
import { reducer as updateLangType } from './updateLangType'

const reducers = [
  updateLangType
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
