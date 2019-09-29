import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import intl from 'react-intl-universal'

// ====== Components ====== //
import Select from '../../../common/components/select/index'

// ====== Constants ====== //
import reducerNameConstants from '../../../common/utils/reducerNameConstants'
import { supportLang } from '../../../common/utils/commonConstants'

// ====== Util ====== //
import UTIL from '../../../common/utils/utils'

// ====== Action ====== //
import * as currentUserActionCreator from '../../../common/redux/currentUser/actions'

class Footer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentLanguage: props.currentUserReducer.langType
    }

    this.handleSetCurrentLanguage = this.handleSetCurrentLanguage.bind(this)
  }

  /**
   * 设置语言
   * @param {下拉菜单选择的语言 string} newlang 
   */
  handleSetCurrentLanguage(newlang) {
    const { currentUserAction } = this.props
    const { currentLanguage } = this.state

    if (newlang.value !== currentLanguage) {
      // 设置语言的步骤：
      // 1.修改下拉菜单选中值
      this.setState({
        currentLanguage: newlang.value
      })

      // 2.新值传给后端修改数据库，并且改写redux的值
      currentUserAction.updateLangTypeAction({
        langType: newlang.value
      })

      // 3.修改localstorage的值
      UTIL.setLangTypeToLocalstorage(newlang.value)

      // 4.刷新页面以重新初始化语言
      window.location.reload(true)
    }
  }

  render() {
    const { currentLanguage } = this.state

    // 支持语言的列表，用于渲染可选下拉菜单
    const languageOption = supportLang.map(item => {
      return {
        text: item.name,
        value: item.id
      }
    })
    return (
      <div className='com-footer'>
        <div className='layout-wrapper'>
          <ul className='com-footer-link'>
            <li>
              <label className='com-footer-link__label'>
                {intl.get('ROOT_PAGE_FOOTER_LANGUAGE')}
              </label>
              <Select
                defaultValue={currentLanguage}
                placement='topStart'
                options={languageOption}
                getSelectOption={this.handleSetCurrentLanguage}
              />
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    currentUserReducer: state[reducerNameConstants.CURRENT_USER_REDUCER]
  }
}

function mapDispatchToProps(dispatch) {
  return {
    currentUserAction: bindActionCreators(currentUserActionCreator, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Footer)
