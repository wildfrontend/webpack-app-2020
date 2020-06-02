import React from 'react'
import { Switch, Route } from 'react-router-dom'

import About from 'pages/About'
import Home from 'pages/Home'

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route path="/about">
                <About />
            </Route>
        </Switch>
    )
}

export default Routes