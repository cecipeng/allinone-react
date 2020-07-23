/**
 * 用户信息写入localstorage
 */
export function setCurrentUserToLocalstorage(data): any {
  localStorage.setItem('currentUser', JSON.stringify(data))
}

/**
 * 当前用户信息 todo delete
 */
export function currentUserAdapter2(data): any {
  return {
    'id': data.userId, // id
    'name': data.userName, // 姓名
    'head': data.userHead, // 头像资源
    'accessToken': data.accessToken
  }
}