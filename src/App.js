import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
import { connect } from "react-redux"
import { bindActionCreators } from "redux"

// ====== Components ====== //
import { view as RootPage } from './features/RootPage/index'
import { view as Login } from './features/Login/index'
import  { Mask } from './common/components/mask/index'

// ====== Util ====== //
import UTIL from './common/utils/utils'

// ====== Constants ====== //
import routerConstants from './common/utils/routerConstants'

// ====== Action ====== //
import * as currentUserActionCreator from "./common/redux/currentUser/actions";
import * as authActionCreator from "./common/redux/auth/actions";


class App extends React.Component {
  componentWillMount () {
    const { currentUserAction, authAction } = this.props
    const { userId, userName, userHead, accessToken } = UTIL.getCurrentUserFromLocalstorage()
    currentUserAction.updateCurrentUserAction({
      userId: userId,
      userName: userName,
      userHead: userHead,
      accessToken: accessToken
    })
    authAction.updateUserLoginTokenAction(accessToken)
  }
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

function mapDispatchToProps(dispatch) {
  return {
    currentUserAction: bindActionCreators(currentUserActionCreator, dispatch),
    authAction: bindActionCreators(authActionCreator, dispatch),
  };
}

export default connect(
  null,
  mapDispatchToProps
)(App);