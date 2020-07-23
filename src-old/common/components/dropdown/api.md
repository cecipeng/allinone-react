# 下拉菜单 Select

元组件。
当页面上的操作命令过多时，用此组件可以收纳操作元素。点击或移入触点，会出现一个下拉菜单。可在列表中进行选择，并执行相应的命令。

## 与Select的区别
- Select的触发按钮为当前选中值的展示，在点击列表项后，返回一个选择的值作为select的选中值，传入固定的text、value等字段
- Dropdown的触发按钮可自定义，列表项也可以自定义，点击列表项后，根据自定义的操作处理不同的事情，如跳转页面等


## Props
| 参数 | 说明 | 数据类型 | 默认值 |
| - | - | - | - |
| options | 下拉菜单配置 | array | 无 |
| dropdownWidth | 下拉菜单宽度 | string | 和选择器同宽 |
| placement | 下拉菜单位置 | string(bottomStart/bottomCenter/bottomEnd/topStart/topCenter/topEnd) | bottomStart |
| trigger | 触发下拉的行为, 移动端不支持 hover | click|hover | 'hover' |
| isDisabled | 是否禁用 | boolean | false |

```
// options的数据结构：
options = [
  { // 每个选项的配置
    text: '', // 显示内容
    icon: '', // 图标
    isDisabled: false, // 单个选项是否禁用
    handleFunc: () => {}, // 点击事件
    children: [
      {
        text: '',
        icon: '',
        isDisabled: false, // 单个选项是否禁用
        handleFunc: () => {}, // 点击事件
        children: []
      }
    ]
  }
]
```

## State
| 参数 | 说明 | 数据类型 | 初始值 | 修改途径
| - | - | - | - | - |
| isOpenDropdown | 是否打开下拉菜单 | boolean | false | |

## 使用案例
```
import Dropdown from 'xxx/common/components/dropdown/index'

<Dropdown
  isDisabled
  dropdownWidth='150px'
  placement='bottomEnd'
  options={[
      {
        text: '退出登录',
        icon: 'icon-log-out',
        handleFunc: () =>{
          console.log(1);
        }
      }
  ]}
>
  <p>点我显示dropdown</p>
</Dropdown>
```
