import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import intl from 'react-intl-universal'

// ====== Components ====== //
import { view as RootPage } from './features/RootPage/index'
import { view as Login } from './features/Login/index'
import  { Mask } from './common/components/mask/index'

// ====== Util ====== //
import UTIL from './common/utils/utils'

// ====== Constants ====== //
import routerConstants from './common/utils/routerConstants'
import reducerNameConstants from './common/utils/reducerNameConstants'

// ====== Config ====== //
import { defaultConfig } from './config/config'

// ====== Action ====== //
import * as currentUserActionCreator from "./common/redux/currentUser/actions";
import * as authActionCreator from "./common/redux/auth/actions";

// 载入语言包
const locales = {
  'en': require('./intl/en.json'),
  'zn': require('./intl/zn.json'),
}

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isIntlInitDone: false // 是否初始化完成语言包
    }
  }
 
  componentDidMount () {
    const { currentUserAction, authAction, } = this.props
    
    // 从localstorage获取用户信息和token，写入redux中
    const { userId, userName, userHead, accessToken, langType } = UTIL.getCurrentUserFromLocalstorage()
    currentUserAction.updateCurrentUserAction({
      userId: userId,
      userName: userName,
      userHead: userHead,
      accessToken: accessToken,
      langType: langType || defaultConfig.language,
    })
    authAction.updateUserLoginTokenAction(accessToken)

  }
  componentDidUpdate (prevProps) {
    if(prevProps.currentUserReducer !== this.props.currentUserReducer)  {
      this.intlInit ()
    }
  }
  // 初始化国际化语言包
  intlInit () {
    const { currentUserReducer } = this.props

    // 从redux获取当前用户的语言，初始化语言包
    const langTypeFromRedux = currentUserReducer.langType
    
    intl.init({
      currentLocale: langTypeFromRedux,
      locales,
    })
    .then(() => {
      this.setState({isIntlInitDone: true});
    })
  }
  render() {
    return (
      this.state.isIntlInitDone && 
      <div id='app'>
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

function mapStateToProps(state) {
  return {
    currentUserReducer: state[reducerNameConstants.CURRENT_USER_REDUCER]
  }
}

function mapDispatchToProps(dispatch) {
  return {
    currentUserAction: bindActionCreators(currentUserActionCreator, dispatch),
    authAction: bindActionCreators(authActionCreator, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);