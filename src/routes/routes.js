import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import App from '../App'
import Home from '../modules/home/home'
import Navigation from '../modules/navigation/navigation'

const routes = () => (
    <Router>
        <App>
            <Route path='/home' component={Home} />
            <Route path='/navigation' component={Navigation} />
        </App>
    </Router>
)

export default routes