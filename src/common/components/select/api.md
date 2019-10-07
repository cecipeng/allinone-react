# 选择器 Select

元组件。
弹出的列表，可从列表项中选择一项作为整体的值，用于代替原生的select选择器

## 与Dropdown的区别
- Select的触发按钮为当前选中值的展示，在点击列表项后，返回一个选择的值作为select的选中值，传入固定的text、value等字段
- Dropdown的触发按钮可自定义，列表项也可以自定义，点击列表项后，根据自定义的操作处理不同的事情，如跳转页面等

## Props
| 参数 | 说明 | 数据类型 | 默认值 |
| - | - | - | - |
| options | 下拉菜单配置 | array | 无 |
| defaultValue | 指定默认选中的条目的value（使用默认按钮时生效） | any | 无 |
| selectWidth | 下拉菜单宽度 | string | 和选择器同宽 |
| placement | 下拉菜单位置 | string(bottomStart/bottomCenter/bottomEnd/topStart/topCenter/topEnd) | bottomStart |
| size | 大小 | 'large'/'middle'/'small' | 'middle' |
| isDisabled | 是否禁用 | boolean | false |
| getSelectOption | 父组件获取当前选中值 | function | - |

```
// options的数据结构：
options = [
    { // 每个选项的配置
        text : string = '', // 文本
        icon: '', // 图标
        value : string = '', // 选项value值
    }
]
```

## State
| 参数 | 说明 | 数据类型 | 初始值 | 修改途径
| - | - | - | - | - |
| selectOption | 选中项（数据结构同props.options） | object | 无 | |
| isOpenSelect | 是否打开下拉菜单 | boolean | false | |

## 使用案例
```
import Select from 'xxx/common/components/select/index'

<Select
    defaultValue={2}
    size='large'
    isDisabled
    selectWidth='100px'
    options={[
        {
            text: 1,
            icon: 'icon-left',
            value:1
        },
        {
            text: 2,
            icon: 'icon-left',
            value:2
        }
    ]}
    getSelectOption={this.handleGetSelectOption}
>
</Select>
```
