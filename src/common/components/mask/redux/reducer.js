import initialState from './initialState'
import { reducer as toggleShowMask } from './toggleShowMask'
import { reducer as updateMaskZIndex } from './updateMaskZIndex'

const reducers = [toggleShowMask, updateMaskZIndex]

export default function reducer(state = initialState, action) {
  let newState
  switch (action.type) {
  default:
    newState = state
    break
  }
  return reducers.reduce((s, r) => r(s, action), newState)
}
