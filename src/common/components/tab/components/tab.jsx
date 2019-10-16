import React from 'react'
import classNames from 'classnames'
import $ from 'jquery'

// ====== Constants ====== //
import { PLACEMENT } from '../utils/constants'

// ====== Components ====== //
import Icon from '../../icon/index'

// ====== Util ====== //
import UTIL from '../../../utils/utils'

export default class Tab extends React.Component {
  static defaultProps = {
    placement: 'bottomStart', // 页签位置：默认top，其他：bottom、left、right
    defaultActivePlane: '', // 默认激活的页签id值
    size: 'middle', // 默认页签大小  'large'/'middle'/'small'
    extraContent: '', // 页签上额外的内容，值为reactNode
    changeTabCallback: () => {}, // 切换页签的回调函数
    options: [
      // 页签的配置
      {
        text: '', // 显示内容
        key: '', // 页签id值
        isDisabled: false, // 是否禁用
      }
    ],
  }

  constructor(props) {
    super(props)

    this.state = {
      activePlane: '', // 当前激活的页签id值
    }
  }

  componentWillMount() {
    
  }

  render() {
    const { size, placement } = props

    // 设置下拉菜单位置
    let placementClassName = ''
    PLACEMENT && PLACEMENT.forEach(item => {
      if (item.name === placement) {
        placementClassName = item.className
      }
    })

    return (
      <div 
        className={classNames(
          `com-tab ${placementClassName}`,
          { [`com-tab--${size}`]: size !== 'middle' },
        )}
      >
        {/* 页签 */}
        <div className="com-tab__bar">
          <div className="com-tab__bar-extra">

          </div>
          <div className="com-tab__bar-container">
            <div className="com-tab__bar-content">
              <ul className="com-tab__bar-list">
                <li className="com-tab__bar-item">
                  <Icon type='' />
                  <span className="com-tab__bar-text">1</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* plane */}
        <div className="com-tab__plane">
          <div
            className={classNames(
              `com-tab__plane-container`,
              { [`com-tab--${size}`]: size !== 'middle' },
            )}
          >
            1
          </div>
        </div>
      </div>
    )
  }
}
