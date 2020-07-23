// api统一状态码
const apiStatusCodeConstants = {
  REQUEST_SUCCESS:            '0000', // 请求成功
  LOGGED_OUT:                 '1001', // 未登录
  REQUEST_PARAM_ERROR:        '1002', // 请求参数错误
  NETWORK_ERROR:              '1003', // 网络异常
  LOGIN_INFO_ERROR:           '2001', // 帐号或者密码错误
  DATA_EXIST:                 '2002', // 记录已存在
  DATA_NOT_EXIST:             '2003' // 记录不存在
}

export default apiStatusCodeConstants
