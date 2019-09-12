import { reducer as signIn } from './signIn'

const reducers = [
  signIn
];

export default function reducer(state, action) {
  let newState;
  switch (action.type) {
    default:
      newState = state;
      break;
  }
  return reducers.reduce((s, r) => r(s, action), newState);
}
