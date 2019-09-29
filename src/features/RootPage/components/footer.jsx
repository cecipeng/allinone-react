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
  handleSetCurrentLanguage(newlang) {
    const { currentUserAction } = this.props
    const { currentLanguage } = this.state

    if (newlang.value !== currentLanguage) {
      this.setState({
        currentLanguage: newlang.value
      })

      currentUserAction.updateLangTypeAction({
        langType: newlang.value
      })

      UTIL.setLangTypeToLocalstorage(newlang.value)
      window.location.reload(true)
    }
  }
  render() {
    const { currentLanguage } = this.state

    // 支持语言的列表
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
