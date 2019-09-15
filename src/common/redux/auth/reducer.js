import initialState from './initialState'
import { reducer as loginAuthWithPassword } from './loginAuthWithPassword'
import { reducer as loginAuthWithToken } from './loginAuthWithToken'

const reducers = [
  loginAuthWithPassword,
  loginAuthWithToken
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
