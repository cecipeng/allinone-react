# 标签页 Tab

元组件。
选项卡切换组件
分为<Tab>容器组件，和<TabPlane>内容组件

## Tab组件 Props
| 参数 | 说明 | 数据类型 | 默认值 |
| - | - | - | - |
| placement | tab标签位置 | string(bottom/top/left/right | top |
| defaultActivePlaneKey | 默认显示的plane | string | 第一个plane |
| size | 大小 | 'large'/'middle'/'small' | 'middle' |
| extraContent | tab标签上额外的内容，通常为操作按钮 | jsx代码块 | 无 |
| changeTabCallback | 切换页签的回调函数 | function | - |
| isDisabled | 是否禁用 | boolean | false |


## Tab组件 State
| 参数 | 说明 | 数据类型 | 初始值 | 修改途径
| - | - | - | - | - |
| activePlaneKey | 当前激活的页签id值 | string | 无 | - |

## TabPlane组件 Props
| 参数 | 说明 | 数据类型 | 默认值 |
| - | - | - | - |
| tabKey | plane的id | string | 无 |
| tabName | tab标签的名字 | string | 'tabName' |
| tabIcon | tab标签的图标，对应Icon组件的type值 | string | 无 |
| isActive | 是否激活该plane | boolean | false |
| isDisabled | 是否禁用该plane | boolean | false |
| handleEnterPlaneCallback | 进入该plane的特殊回调 | function | - |


## 使用案例
```
import Tab, { TabPlane } from 'xxx/common/components/tab/index'

const extraContent = (
  <div>
    <a>link 1</a>
    <a>link 2</a>
  </div>
)
<Tab
  placement='bottom'
  defaultActivePlaneKey='cc'
  changeTabCallback={()=>{console.log('切换每个tab时触发');
  }}
  extraContent={extraContent}
  size='large'
>
  <TabPlane tabName='aa' tabKey='aa' tabIcon='icon-left' handleEnterPlaneCallback={()=>{console.log('进入aa时触发')}}>
    aa
  </TabPlane>
  <TabPlane tabName='bb' tabKey='bb' isDisabled>
    bb
  </TabPlane>
  <TabPlane tabName='cc' tabKey='cc' isDisabled>
    cc
  </TabPlane>
</Tab>
```
