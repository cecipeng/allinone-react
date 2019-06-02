import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from './header'
import { view as Home } from '../../Home/index'
import { view as Navigation } from '../../Navigation/index'

export default class RootPage extends React.Component {
    render () {
        return (
            <div className="layout">
                <div className="layout-header">
                    <Header />
                </div>
                <div class="layout-body">
                    <Switch>
                        <Route exact path='/rootPage/home' component={Home}/>
                        <Route path='/rootPage/navigation' component={Navigation}/>
                    </Switch>
                </div>
            </div>
        )
    }
}