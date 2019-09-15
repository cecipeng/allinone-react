import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'

// ====== Components ====== //
import { view as RootPage } from './features/RootPage/index'
import { view as Login } from './features/Login/index'
import  { Mask } from './common/components/mask/index'

// ====== Constants ====== //
import routerConstants from './common/utils/routerConstants'

export default class App extends React.Component {
  render() {
    return (
      <div id="app">
        <Switch>
          <Route path={routerConstants.ROOT_PAGE} component={RootPage} />
          <Route path={routerConstants.LOGIN} component={Login} />
          <Redirect to={routerConstants.ROOT_PAGE} />
        </Switch>
        <Mask />
      </div>
    )
  }
}

