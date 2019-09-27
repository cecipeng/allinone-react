import React from 'react'
import { Route, Switch } from 'react-router-dom'

// ====== Components ====== //
import Header from './header'
import Footer from './footer'
import { view as Home } from '../../Home/index'
// import { view as Navigation } from '../../Navigation/index'

// ====== Constants ====== //
import routerConstants from '../../../common/utils/routerConstants'

export default class RootPage extends React.Component {
    render () {
        return (
            <div className='layout'>
                <div className='layout-header'>
                    <Header />
                </div>
                <div className='layout-body'>
                    <Switch>
                        <Route exact path={routerConstants.HOME} component={Home}/>
                        {/* <Route path={routerConstants.NAVIGATION} component={Navigation}/> */}
                    </Switch>
                </div>
                <div className='layout-footer'>
                    <Footer />
                </div>
            </div>
        )
    }
}