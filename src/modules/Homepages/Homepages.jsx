import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from '../../elements/header/header'
import Home from './Home/Home'
import Navigation from './Navigation/Navigation'

export default class Homepages extends React.Component {
    render () {
        return (
            <div className="layout">
                <div className="layout-header">
                    <Header />
                </div>
                <div class="layout-body">
                    <Switch>
                        <Route exact path='/homepages/home' component={Home}/>
                        <Route path='/homepages/navigation' component={Navigation}/>
                    </Switch>
                </div>
            </div>
        )
    }
}