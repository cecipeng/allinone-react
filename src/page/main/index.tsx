import React from 'react'
import { Routes } from '@gem-mine/durex-router'
import { smart, actions } from '@gem-mine/durex'
import _ from 'lodash'

// ====== Components ====== //
import Header from './Header'
import Footer from './Footer'

// ====== Util====== //
import * as commonUtil from '../../util/commonUtil'

// ====== DataType ====== //
import * as dataType from './data'

// ====== Styles====== //
import './style/index.module.scss'

interface Props {
  currentUser: dataType.CurrentUser;
}

@smart((state) => (
  {
    currentUser: state.main.currentUser
  }
))
class Main extends React.Component<Props> {
  componentDidMount (): void {
    // 从localstorage中读取登录用户信息。登录是否失效在第一次请求数据时验证
    const _currentUser = commonUtil.getLocalstorage('currentUser')
    if (!_.isEmpty(_currentUser)) {
      actions.main.setField({
        currentUser: _currentUser
      })
    }
  }
  render(): JSX.Element {
    const { currentUser } = this.props
    return (
      <div className="layout">
        <div className="layout-header">
          <Header currentUser={currentUser} />
        </div>
        <div className="layout-body">
          <Routes path="main" />
        </div>
        <div className="layout-footer">
          <Footer />
        </div>
      </div>
    )
  }
}

export default Main
