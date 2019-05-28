import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
import Homepages from './modules/Homepages/Homepages'
import Login from './modules/Login/Login'

export default class App extends React.Component {
  render() {
    return (
      <div id="app">
        <Switch>
          <Route path='/homepages' component={Homepages} />
          <Route path='/login' component={Login} />
          <Redirect to="/homepages" />
        </Switch>
      </div>
    )
  }
}
