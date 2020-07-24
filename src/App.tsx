import * as React from 'react'
import { render } from '@gem-mine/durex'
import intl from '@gem-mine/intl'
import _ from 'lodash'

import './config/request'
import './route'
import './config/durex'

import { Router, Routes } from '@gem-mine/durex-router'
import { importAll } from './util/loader'
// import * as serviceWorker from './util/serviceWorker'

// ====== Util====== //
import * as commonUtil from './util/commonUtil'

import I18N from './i18n'
import bootstrap from './config/bootstrap'
import './asset/style/common.scss'

importAll(require.context('../src', true, /model(\/.+)?\.(j|t)s$/))

class App extends React.Component {
  componentDidMount () {
    // 根据localstorage确认显示语言
    const _langType = commonUtil.getLocalstorage('langType')
    if (!_.isEmpty(_langType)) {
      intl.setLocale(_langType)
    }
  }

  render(): JSX.Element {
    return (
      <I18N bootstrap={bootstrap}>
        <Router>
          <Routes />
        </Router>
      </I18N>
    )
  }
}

render(<App />, document.querySelector('#root'))

// serviceWorker.unregister()
