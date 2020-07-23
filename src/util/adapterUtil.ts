/**
 * 当前用户信息
 */
export function currentUserAdapter(data): any {
  return {
    'id': data.userId, // id
    'name': data.userName, // 姓名
    'head': data.userHead, // 头像资源
    'accessToken': data.accessToken
  }
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