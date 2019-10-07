import axios from 'axios'

// ====== Constant ====== //
import routerConstants from './routerConstants'
import { apiConfig } from './commonConstants'

const UTIL = {
  request: (url, method, params) => {
    let config = apiConfig    // api基础配置

    method = method.toUpperCase()

    if (method === 'GET') {
      config =
        params &&
        Object.assign({}, config, {
          params: params
        })
    } else if (method === 'POST') {
      config =
        params &&
        Object.assign({}, config, {
          // data: JSON.stringify(params)
          data: params
        })
    }

    config = Object.assign({}, config, {
      url: url,
      method: method
    })

    return axios(config)
      .then(function(response) {
        switch (response.data.meta.code) {
        case '1001': // 未登录
          window.location.href = routerConstants.LOGIN // 跳转到登录页
          break
        case '1002': // 请求参数错误
          // const mess = {
          //     show: true, //是否显示提示
          //     content: "参数错误，请重试～", //内容
          //     type: "error", //类型
          //     showClosebtn: true //是否显示关闭按钮
          // }
          // store.commit('setMessage',mess);
          // console.log("Allinone："+response.data.meta.message);
          break
        case '1003': // 网络异常
          // 统一跳转到一个网络异常的界面
          break
        default:
          // 请求成果,或其他业务返回码
          return response
        }
      })
      .catch(function(error) {
        console.log('Allinone ------> （错误信息）' + error)
      })
  },

  // 从localstorage获取用户信息
  getCurrentUserFromLocalstorage: () => {
    return {
      userId: localStorage.getItem('userId'),
      userName: localStorage.getItem('userName'),
      userHead: localStorage.getItem('userHead'),
      accessToken: localStorage.getItem('accessToken'),
      langType: localStorage.getItem('langType')
    }
  },
  // 用户信息写入localstorage
  setCurrentUserToLocalstorage: ({
    userId,
    userName,
    userHead,
    accessToken,
    langType
  }) => {
    localStorage.setItem('userId', userId)
    localStorage.setItem('userName', userName)
    localStorage.setItem('userHead', userHead)
    localStorage.setItem('accessToken', accessToken)
    localStorage.setItem('langType', langType)
  },

  // 从localstorage获取语言
  getLangTypeFromLocalstorage: () => {
    return localStorage.getItem('langType')
  },
  // 最新设置的语言写入localstorage
  setLangTypeToLocalstorage: langType => {
    localStorage.setItem('langType', langType)
  },

  /**
   * 生成唯一的随机数（15位）
   */
  getRandomId: (number=15) => {
    return Number(Math.random().toString().substr(3, number) + Date.now()).toString(36);
  }
}

export default UTIL
