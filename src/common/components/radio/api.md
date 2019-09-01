# 单选框 Radio

元组件。
多个备选项中选择其一

## Props
| 参数 | 说明 | 数据类型 | 默认值 |
| - | - | - | - |
| value | 选中的值 | 任意 | 无 |
| icon | 图标 | string | '' |
| isCheck | 是否选中 | boolean | false |
| isDisabled | 是否禁用 | boolean | false |

## RadioGroup Props
| 参数 | 说明 | 数据类型 | 默认值 |
| - | - | - | - |
| value | Radio组选中值 | 任意 | 无 |
| defaultValue | Radio组默认选中值 | 任意 | 无 |
| buttonSize | Radio组大小（仅type='button'时有效） | 'large'/'middle'/'small' | 'middle' |
| radioList | 以配置形式设置各Radio | array | 无 |
| isDisabledAll | 是否全部禁用 | boolean | false |
| type | Radio组样式类型 | 'radio'/'button' | 'radio' |
| onChange | 选项变化时的回调函数 | function | 无 |

```
// radioList的数据结构：
radioList = [
    { // 每个Radio的配置
        text : string|ReacNode = '', // 文本（带图标时可不设置）
        value : any = '', // radio值
        isDisabled : boolean = false, // 是否禁用
        icon : 'xx', // 图标对应类名（仅在type='button'时有效）
    }
]
```

## State
| 参数 | 说明 | 数据类型 | 初始值 | 修改途径
| - | - | - | - | - |
| isCheck | 是否选中 | boolean | props.isCheck | |

## 使用案例
### 1.使用单个Radio
```
import Radio from 'xxx/common/components/radio/index'

<Radio
    value='a'
    isCheck
    isDisabled = {false}
    icon='detail'
>
    <div>xxx</div>
</Radio>
```

### 2.使用Radio组
```
import Radio, { RadioGroup } from 'xxx/common/components/radio/index'
Radio.Group = RadioGroup
<Radio.Group
    isDisabledAll
    value='b'
    radioList={[
        {
            text: '1',
            value: 'a',
            icon: 'list'
        },
        {
            text: (<div>2</div>),
            value: 'b',
            icon: 'detail'
        }
    ]}
/>
```