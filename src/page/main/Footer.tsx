import React from 'react'
import intl from '@gem-mine/intl'

// ====== Components ====== //
import { Select } from 'fish'

// ====== Constants ====== //
import { LANG_TYPE } from '../../constant/commonConstant'

const { Option } = Select

export default function Footer(): JSX.Element {
  const { currentLocale } = intl.getLocale()

  /**
   * 设置语言
   * @param {下拉菜单选择的语言 string} newVal
   */
  const handleSetCurrentLangType = (newVal): void => {
    intl.setLocale(newVal)

    // 2.新值传给后端修改数据库，并且改写redux的值
    // todo

    // 3.刷新页面以重新初始化语言
    // window.location.reload(true)
  }
  return (
    <div className="com-footer">
      <div className="layout-wrapper">
        <ul className="com-footer-link">
          <li>
            <label className="com-footer-link__label">
              {intl.get('ROOT_PAGE_FOOTER_LANGUAGE')}
            </label>
            <Select defaultValue={currentLocale} onChange={handleSetCurrentLangType}>
              {
                LANG_TYPE.map((lang) => (
                  <Option key={lang.id} value={lang.id}>{ lang.label }</Option>
                ))
              }
            </Select>
          </li>
        </ul>
      </div>
    </div>
  )
}
