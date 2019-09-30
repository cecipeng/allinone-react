import { Map } from 'immutable'

const initialState = Map({
  isShowMask: false,
  callMaskCount: 0, // 统计多少个组件调用需要显示mask
  maskZIndex: 100
})

export default initialState
