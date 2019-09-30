import initialState from './initialState'
import { reducer as showMask } from './showMask'
import { reducer as hiddenMask } from './hiddenMask'
import { reducer as updateMaskZIndex } from './updateMaskZIndex'

const reducers = [
  showMask,
  hiddenMask,
  updateMaskZIndex
]

export default function reducer(state = initialState, action) {
  let newState
  switch (action.type) {
  default:
    newState = state
    break
  }
  return reducers.reduce((s, r) => r(s, action), newState)
}
