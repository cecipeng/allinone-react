# 遮罩 Mask

元组件。
页面弹出浮层时可配置显示遮罩，通常由弹窗等其他组件调用，不单独使用。且无论多少个弹窗需要显示遮罩，全局只存在唯一一个mask

## Props
无


## State
无

## 使用案例
### 1.显示/隐藏遮罩
其他组件需要显示/隐藏遮罩
```
import * as maskActionCreator from '../mask/redux/actions'

...
const { isMask, maskAction } = this.props // isMask为调用的组件需要设置是否显示遮罩

// 显示遮罩
isMask && maskAction.showMaskAction()

// 隐藏遮罩
isMask && maskAction.hiddenMaskAction()
...

function mapDispatchToProps(dispatch) {
  return {
    maskAction: bindActionCreators(maskActionCreator, dispatch)
  }
}
```
