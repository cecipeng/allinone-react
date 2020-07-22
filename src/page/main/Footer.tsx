import React, { useState } from 'react'
import intl from '@gem-mine/intl'

// ====== Components ====== //
import { Select } from 'fish'

// ====== Constants ====== //
import { LANG_TYPE } from '../../constant/commonConstant'

const { Option } = Select

interface Props {
  langType: string;
}

export default function Footer(props: Props): JSX.Element {
  const { langType } = props
  const [currentLangType, setCurrentLangType] = useState<string>(langType)

  /**
   * 设置语言
   * @param {下拉菜单选择的语言 string} newVal
   */
  const handleSetCurrentLangType = (newVal): void => {
    if (newVal !== currentLangType) {
      // 设置语言的步骤：
      // 1.修改下拉菜单选中值
      setCurrentLangType(newVal)

      // 2.新值传给后端修改数据库，并且改写redux的值

      // 3.修改localstorage的值

      // 4.刷新页面以重新初始化语言
      window.location.reload(true)
    }
  }
  return (
    <div className="com-footer">
      <div className="layout-wrapper">
        <ul className="com-footer-link">
          <li>
            <label className="com-footer-link__label">
              {intl.get('ROOT_PAGE_FOOTER_LANGUAGE')}
            </label>
            <Select defaultValue={currentLangType} onChange={handleSetCurrentLangType}>
              {
                LANG_TYPE.map((lang) => (
                  <Option value={lang.id}>{ lang.label }</Option>
                ))
              }
            </Select>
          </li>
        </ul>
      </div>
    </div>
  )
}
