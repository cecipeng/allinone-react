import mainRequest from './requestUtil'

/**
 * 登录
 * @param params
 */
export function fetchLoginIn(params): any {
  const url = 'api/login/verify'
  return mainRequest({
    url,
    params,
    method: 'POST'
  })
}

/**
 * demo - todo delete
 * @param params
 */
export function fetchDemo(id: string): any {
  const url = '/v1/demo/' + id
  return mainRequest({
    url,
    method: 'GET'
  })
}