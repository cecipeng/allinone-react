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
 * 所有个人和系统导航信息
 */
export function navigationInfoAdapter(data): any {
  return data.map((category) => {
    const _tags = category.navigators.map((tag) => (
      {
        'id': tag.navigatorId,
        'name': tag.navigatorName,
        'url': tag.navigatorUrl,
        'description': tag.description,
        'isFavor': tag.isFavor === 1 ? true : false,
        'isSystem': tag.isSystem === 1 ? true : false
      }
    ))
    return {
      'id': category.categoryId,
      'name': category.categoryName,
      'tags': _tags
    }
  })
}
