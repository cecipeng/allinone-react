# 图标 Icon

元组件。
矢量图标库，使用iconfont的symbol svg图标

## Props
| 参数 | 说明 | 数据类型 | 默认值 |
| - | - | - | - |
| type | 图标类型，参考以下已提供的图标类型列表 | string | 无 |
| style | 设置图标的样式 | css样式对象 | 无 |
| custormClass | 图标自定义样式名 | string | '' |

## 图标类型
| type | 用途 | 说明 |
| - | - | - |
| icon-left | 向左箭头 | 通用 |
| icon-right | 向右箭头 | 通用 |
| icon-top | 向上箭头 | 通用 |
| icon-bottom | 向下箭头 | 通用 |
| icon-log-out | 退出登录 | - |
| icon-default-head | 默认用户头像 | - |
| icon-user | 登录页用户名input | - |
| icon-password | 登录页密码input | - |

## 使用案例
### 1.使用默认按钮
```
import Icon from 'xxx/common/components/icon/index'

<Icon type='icon-left' style={fontSize:16px} custormClass='icon-custorm-css' />
```
