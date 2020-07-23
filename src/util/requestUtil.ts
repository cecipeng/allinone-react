import { message } from 'fish'
import request from '@gem-mine/request'

const { main } = request

/**
 * mainRequest
 * @param config
 */
export default function mainRequest (config): Promise<any> {
  const method = (config.method || 'GET').toLowerCase()
  config.customError = true
  return main[method](config.url, config).catch(() => {
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
