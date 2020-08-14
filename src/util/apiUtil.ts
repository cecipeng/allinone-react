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
 * 获取所有个人和系统导航信息
 */
export function fetchAllNavigation(): any {
  const url = 'api/navigator/member'
  return mainRequest({
    url,
    method: 'GET'
  })
}

/**
 * 新增导航分类
 * @param name
 */
export function addNavCategory(params): any {
  const url = 'api/navigator/saveNavCategory'
  return mainRequest({
    url,
    params,
    method: 'POST'
  })
}

/**
 * 编辑or新增导航标签
 * @param name
 */
export function editOrAddNavTag(editTagId, params): any {
  const url = editTagId.length > 0 ? 'api/navigator/updateNav' : 'api/navigator/saveNav'
  return mainRequest({
    url,
    params,
    method: 'POST'
  })
}