import { asyncLoader } from '../util/loader'

export default {
  path: '/',
  component: asyncLoader('page/main'),
  index: true,
  // 子路由
  sub: {
    home: {
      path: '/',
      component: asyncLoader('page/main/features/home'),
      index: true
    },
    navigation: {
      path: '/navigation',
      component: asyncLoader('page/main/features/navigation'),
    },
    // simple: {
    //   path: '/',
    //   component: asyncLoader('page/demo/Simple'),
    //   sub: {
    //     counter: {
    //       index: true,
    //       path: '/counter',
    //       component: asyncLoader('page/demo/Counter')
    //     },
    //     router: {
    //       path: '/router/:id',
    //       component: asyncLoader('page/demo/Router')
    //     },
    //     request: {
    //       path: '/request',
    //       component: asyncLoader('page/demo/Request')
    //     },
    //     permission: {
    //       path: '/permission',
    //       permission: (): boolean => {
    //         const store = getState()
    //         return store.demo.count > 10
    //       },
    //       redirect: 'demo.simple.permission.one',
    //       description: '权限拦截例子',
    //       module: {
    //         one: {
    //           path: '/one',
    //           component: asyncLoader('page/demo/permission/One')
    //         },
    //         two: {
    //           path: '/two',
    //           component: asyncLoader('page/demo/permission/Two')
    //         }
    //       }
    //     }
    //   }
    // }
  }
}
