import React, { useState } from 'react'
import intl from '@gem-mine/intl'

// ====== Components ====== //
import { Radio, Button } from 'fish'
import TagCard from './TagCard'

// ====== DataType ====== //
import * as dataType from '../../data'

// ====== Styles ====== //
import './style/index.module.scss'

interface Props {
  myNavigation: Array<dataType.NavCategoryInfo>; // 我的导航
  sysNavigation: Array<dataType.NavCategoryInfo>; // 系统导航
  handleEditNavModalVisible: Function;
}

function NavigationContent(props: Props): JSX.Element {
  const { myNavigation, sysNavigation, handleEditNavModalVisible } = props
  const [ viewMode, setViewMode ] = useState('detail') // 视图：'detail'/'list'/'close'
  return (
    <>
      {/* 我的导航 */}
      <div className={`nav-box nav-box--${viewMode}`}>
        <div className="layout-wrapper">
          <div className="ui-maintitle ui-maintitle--mynav ui-maintitle--level1">
            <h4 className="ui-maintitle__text">{intl.get('NAVIGATION_TITLE_MINE')}</h4>
            <div className="frbox">
              <div className="nav-viewmode">
                <Radio.Group value={viewMode} buttonStyle="solid" onChange={(e): void => {setViewMode(e.target.value)}}>
                  <Radio.Button value="detail">{intl.get('NAVIGATION_VIEWMODE_DETAIL')}</Radio.Button>
                  <Radio.Button value="list">{intl.get('NAVIGATION_VIEWMODE_LIST')}</Radio.Button>
                  <Radio.Button value="close">{intl.get('NAVIGATION_VIEWMODE_CLOSE')}</Radio.Button>
                </Radio.Group>
              </div>
              <Button type="primary" className="com-btn--editor" onClick={(): void => { handleEditNavModalVisible(true) }}>
                <i className="icon-edit" />
                {intl.get('COM_EDIT')}
              </Button>
            </div>
          </div>
          {/* <comError :text="showError.text" :type="showError.type" v-if="showError.show" size="smallCol"></comError> */}
          {
            myNavigation.map((category) => (
              <div key={category.id} className="nav-box">
                <div className="ui-maintitle ui-maintitle--level2">
                  <h4 className="ui-maintitle__text">{category.name}</h4>
                </div>
                <div className="com-list-nav">
                  <ul className="com-list-nav__list">
                    {
                      category.tags.map((tag) => (
                        <TagCard key={tag.id} tagInfo={tag} />
                      ))
                    }
                  </ul>
                </div>
              </div>
            ))
          }
        </div>
      </div>

      {/* 热门导航 */}
      <div className={`nav-box nav-box--sysnav layout-wrapper nav-box--${viewMode}`}>
        <div className="ui-maintitle ui-maintitle--sysnav ui-maintitle--level1">
          <h4 className="ui-maintitle__text">{intl.get('NAVIGATION_TITLE_HOT')}</h4>
        </div>
        {
          sysNavigation.map((category) => (
            <div key={category.id} className="nav-box">
              <div className="ui-maintitle ui-maintitle--level2">
                <h4 className="ui-maintitle__text">{category.name}</h4>
              </div>
              <div className="com-list-nav">
                <ul className="com-list-nav__list">
                  {
                    category.tags.map((tag) => (
                      <TagCard key={tag.id} tagInfo={tag} />
                    ))
                  }
                </ul>
              </div>
            </div>
          ))
        }
      </div>
    </>
  )
}

export default NavigationContent
