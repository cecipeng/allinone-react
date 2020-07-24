import React from 'react'
import intl from '@gem-mine/intl'

// ====== Components ====== //
import { Select } from 'fish'

// ====== Constants ====== //
import { LANG_TYPE } from '../../constant/commonConstant'

// ====== Util====== //
import * as commonUtil from '../../util/commonUtil'

const { Option } = Select

export default function Footer(): JSX.Element {
  const { currentLocale } = intl.getLocale()

  /**
   * 设置语言
   * @param {下拉菜单选择的语言 string} newVal
   */
  const handleSetCurrentLangType = (newVal): void => {
    // 1.设置语言
    intl.setLocale(newVal)

    // 2.新值写入localstorage
    commonUtil.setLangTypeToLocalstorage(newVal)
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
