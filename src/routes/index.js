import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from 'pages/Home'
import About from 'pages/About'

import RoutesTopics from './topics'
import NotFound404 from 'pages/ErrorPage/404'

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route path="/about">
                <About />
            </Route>
            <Route path="/topics">
                <RoutesTopics />
            </Route>
        </Switch>
    )
}

export default Routes
