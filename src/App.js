import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
import { view as RootPage } from './features/RootPage/index'
import { view as Login } from './features/Login/index'

export default class App extends React.Component {
  render() {
    return (
      <div id="app">
        <Switch>
          <Route path='/rootPage' component={RootPage} />
          <Route path='/login' component={Login} />
          <Redirect to="/rootPage" />
        </Switch>
      </div>
    )
  }
}
