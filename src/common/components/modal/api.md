# 弹窗 Modal

元组件。
当前页面弹出浮层进行操作

## Props
| 参数 | 说明 | 数据类型 | 默认值 |
| - | - | - | - |
| container | modal挂载的html节点 | | |
| title | 标题内容 | string/ReactNode | '标题' |
| okBtn | 确认按钮内容 | string/ReactNode | '确定' |
| cancelBtn | 取消按钮内容 | string/ReactNode | '取消' |
| okBtnProps | 确认按钮的props | button的props配置 | button的默认props配置 |
| cancelBtnProps | 取消按钮的props | button的props配置 | button的默认props配置 |
| isVisible | 弹窗是否可见 | boolean | false |
| style | modal的自定义样式 | object | {} |
| bodyStyle | body的自定义样式 | object | {} |
| width | 宽度 | string/number | 520 |
| zIndex | 显示层级 | number | 101 |
| isCentered | 是否垂直居中显示 | boolean | true |
| isMask | 是否展示遮罩 | boolean | true |
| isCancelBtn | 是否显示取消按钮 | boolean | true |
| isMaskClosable | 是否点击蒙层关闭modal | boolean | true |
| isClosable | 是否显示右上角的关闭按钮 | boolean | true |
| isHeader | 是否显示头部 | boolean | true |
| isFooter | 是否显示底部 | boolean | true |
| okBtnCallback | 确定按钮的回调 | function | null |
| cancelBtnCallback | 点击遮罩层或右上角叉或取消按钮的回调 | function | null |
| afterCloseCallback | 完全关闭后的回调 | function | null |


## State
| 参数 | 说明 | 数据类型 | 初始值 | 修改途径
| - | - | - | - | - |
| isVisible | 弹窗是否可见 | boolean | props.isVisible |  |

## Redux
【内部定义】

【使用外部】
| 绑定的props | 来源 | 类型 | 数据类型/参数类型 |
| actions.updateShowMask | mask元组件 | action | isShowMask(boolean) |


## 附
### 1. 如何使用ReactNode
```
title = {
    <div className='title'>xx</div>
}
```

