import { defaultConfig } from '../../config/config'

// 开发环境api地址
const baseUrlConstans = {
  dev: 'http://47.107.44.199:9080/fefull/',
  test: 'http://47.107.44.199:9080/fefull/',
  prod: 'http://47.107.44.199:9080/fefull/'
}

// api基础配置
export const apiConfig = {
  baseURL: baseUrlConstans[defaultConfig.currentEnv],
  contentType: 'application/json',
  headers: {
    Authorization: localStorage.accessToken || '' // 身份验证，与后端约定每次请求附上token值验明是否登录
  }
}

// 支持的语言包
export const supportLang = [
  {
    id: 'en',
    name: 'en'
  },
  {
    id: 'zn',
    name: '简体中文'
  }
]
