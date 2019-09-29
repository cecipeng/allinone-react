# 下拉菜单 Select

元组件。
向下弹出的列表，可从列表项中选择一项

## Props
| 参数 | 说明 | 数据类型 | 默认值 |
| - | - | - | - |
| options | 下拉菜单配置 | array | 无 |
| defaultValue | 指定默认选中的条目的value（使用默认按钮时生效） | any | 无 |
| dropdownWidth | 下拉菜单宽度 | string | 和选择器同宽 |
| placement | 下拉菜单位置 | string(bottomStart/bottomCenter/bottomEnd/topStart/topCenter/topEnd) | bottomStart |
| size | 大小 | 'large'/'middle'/'small' | 'middle' |
| isDisabled | 是否禁用 | boolean | false |
| getSelectOption | 父组件获取当前选中值 | function | - |

```
// options的数据结构：
options = [
    { // 每个选项的配置
        text : string = '', // 文本
        value : string = '', // 选项value值
    }
]
```

## State
| 参数 | 说明 | 数据类型 | 初始值 | 修改途径
| - | - | - | - | - |
| selectOption | 选中项（数据结构同props.options） | object | 无 | |
| isOpenDropdown | 是否打开下拉菜单 | boolean | false | |

## 使用案例
### 1.使用默认按钮
```
import Select from 'xxx/common/components/select/index'

<Select
    defaultValue={2}
    size='large'
    isDisabled
    dropdownWidth='100px'
    options={[
        {
            text: 1,
            value:1
        },
        {
            text: 2,
            value:2
        }
    ]}
>
</Select>
```

### 2.使用自定义按钮
```
import Select from 'xxx/common/components/select/index'

handleGetSelectOption(option) {
  console.log(option.value, option.text)
}

<Select
    defaultValue={2}
    options={[
        {
            text: 1,
            value:1
        },
        {
            text: 2,
            value:2
        }
    ]}
    getSelectOption={this.handleGetSelectOption}
>
    <p>点我打开</p>
</Select>
```