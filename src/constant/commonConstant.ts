// ====== Constants ====== //
import ROUTERS from './routerConstant'

// 支持的语言包
export const LANG_TYPE = [
  {
    id: 'zh-CN',
    label: '简体中文'
  },
  {
    id: 'en',
    label: 'English'
  }
]

// 默认值
export const DEFAULT_CONFIG = {
  PAGE: ROUTERS.HOME, // 默认页面
  LANG_TYPE: LANG_TYPE[1].id // 默认语言
}


