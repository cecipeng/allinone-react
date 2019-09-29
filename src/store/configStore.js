import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension' // 引入redux-devtools-extension的可视化工具
import { createLogger } from 'redux-logger' // 利用redux-logger打印日志
import thunk from 'redux-thunk'
import rootReducer from './rootReducer'

const _initialState = {}

// 中间件
const loggerMiddleware = createLogger({ collapsed: true })
const middlewares = [loggerMiddleware, thunk] // 创建一个中间件集合

export default function configureStore(initialState = _initialState) {
  const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middlewares))
  )
  return store
}
