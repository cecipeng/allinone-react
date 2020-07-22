import React from 'react'
import { Routes } from '@gem-mine/durex-router'
import { smart } from '@gem-mine/durex'

// ====== Components ====== //
import Header from './Header'
import Footer from './Footer'

// ====== DataType ====== //
import * as dataType from './data'

// ====== Styles====== //
import './style/index.module.scss'

interface Props {
  currentUser: dataType.currentUser;
}

@smart((state) => (
  {
    currentUser: state.main.currentUser
  }
))
class Main extends React.Component<Props> {
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
          <Footer langType={currentUser.langType} />
        </div>
      </div>
    )
  }
}

export default Main
