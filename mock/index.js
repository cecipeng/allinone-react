const Mock = require('mockjs')
const { sleep, raise } = require('./mock')

const { Random, mock } = Mock

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
    })
  }
}
