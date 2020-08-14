const Mock = require('mockjs')
const { sleep, raise } = require('./mock')

const { Random, mock } = Mock

const allNavigation = []
const count = Random.integer(1,10)
for (let i = 0; i < count; i++) {
  const tags = []
  for (let j = 0; j < Random.integer(1,20); j++) {
    tags.push({
      'navigatorId': Random.id(),
      'navigatorName': Random.word(2, 8),
      'navigatorUrl': Random.url(),
      'description': Random.paragraph(1, 5),
      'isFavor': Random.integer(0,1),
      'isSystem': Random.integer(0,1)
    })
  }
  allNavigation.push({
    'categoryId': Random.id(),
    'categoryName': Random.word(2, 5),
    'navigators': tags
  })
}
const myCount = Random.integer(0,count)
const myNavigation = allNavigation.slice(0, myCount)
const sysNavigation = allNavigation.slice(myCount)

module.exports = {
  // url 前缀
  prefix: 'mock',
  data: {
    'GET /v11/demo/:id': async (ctx, id) => {
      id = parseInt(id, 10)
      // 模拟服务端异常
      if (id === 0) {
        return raise(ctx, 'id should not be zero')
      }
      // 模拟延时
      if (ctx.query.sleep) {
        await sleep(ctx.query.sleep)
      }
      // 模拟正常返回
      return mock({
        id,
        name: Random.first(),
        email: Random.email()
      })
    },
    // 登录
    'POST /api/login/verify': () => mock({
      'data': {
        'meta': {
          'code': '0000',
          'message': '请求成功'
        },
        'datas': {
          'userId': Random.id(),
          'userName': Random.first(),
          'userHead': Random.image('200x200', '#2fc9b9', 'ceci'), // 头像资源
          'accessToken': '200820e3227815ed1756a6b531e7e0d2'
        }
      }
    }),
    // 获取所有个人和系统导航信息
    'GET /api/navigator/member': () => mock({
      'data': {
        'meta': {
          'code': '0000',
          'message': '请求成功'
        },
        'datas': {
          'system': sysNavigation,
          'member': myNavigation
        }
      }
    })
  }
}
