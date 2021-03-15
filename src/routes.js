import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'

import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Classes from './pages/Classes'
import Styles from './pages/Styles'
import Team from './pages/Team'
import Timetable from './pages/Timetable'
import Booking from './pages/Booking'
import Gallery from './pages/Gallery'
import Blog from './pages/Blog'
import ContactUs from './pages/ContactUs'

function  Routes() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/about" exact component = {AboutUs} />
                <Route path="/classes" exact component = {Classes} />
                <Route path="/styles" exact component = {Styles} />
                <Route path="/team" exact component = {Team} />
                <Route path="/timetable" exact component = {Timetable} />
                <Route path="/booking" exact component = {Booking} />
                <Route path="/gallery" exact component = {Gallery} />
                <Route path="/blog" exact component = {Blog} />
                <Route path="/contact" exact component = {ContactUs} />
            </Switch>
        </Router>
    )
}

export default Routes;