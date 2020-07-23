// store各状态，由于可能跨组件访问，常量提为公用
const storeStatusConstants = {
  loginStatus: {
    // 当前登录状态
    LOGGED_IN: 'LOGGED_IN', // 已登录
    LOGGED_OUT: 'LOGGED_OUT' // 未登录
  }
}

export default storeStatusConstants
