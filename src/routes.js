import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'

import Home from './pages/Home'
import AboutUs from './pages/AboutUs'

function  Routes() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component = {Home} />
                <Route path="/about" exact component = {AboutUs} />
            </Switch>
        </Router>
    )
}

export default Routes;