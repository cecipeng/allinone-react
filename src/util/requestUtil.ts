import { message } from 'fish'
import request from '@gem-mine/request'
import { urlFor } from '@gem-mine/durex-router'
import { actions } from '@gem-mine/durex'

const { main } = request

/**
 * mainRequest
 * @param config
 */
export default function mainRequest (config): Promise<any> {
  const method = (config.method || 'GET').toLowerCase()
  config.customError = true
  return main[method](config.url, config).then((response) => {
    switch (response.data.meta.code) {
    case '1001': // 未登录
      actions.router.push(urlFor('login')) // 跳转到登录页
      return false
    case '1002': // 请求参数错误 // TODO-统一接口返回异常处理
      message.error('请求参数错误')
      return false
    case '1003': // 网络异常
      // 统一跳转到一个网络异常的界面
      message.error('网络异常')
      return false
    default:
      // 请求成功,或其他业务返回码
      return response
    }
  }).catch(() => {
    if (!navigator.onLine) {
      message.error('网络已断开')
    }
  })
}

// use demo
// export function fetchDemo(examId: string): any {
//   const url = `/v1/exams/${examId}`
//   return mainRequest({
//     url,
//     method: 'GET'
//   })
// }
