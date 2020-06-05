import React, { Suspense } from 'react'
import { Switch, Route } from 'react-router-dom'

import About from 'pages/About'

import RoutesTopics from './topics'
import NotFound404 from 'pages/ErrorPage/404'
import AuthRoute from './auth/AuthRoute'
import Dashboard from 'pages/Dashboard'
import RoutesAuth from './auth'

const Home = React.lazy(() => import('pages/Home'))

const Routes = () => {
    return (
        <Suspense fallback={<div>Loading</div>}>
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
                <Route path="/auth">
                    <RoutesAuth />
                </Route>
                <AuthRoute path="/dashboard">
                    <Dashboard />
                </AuthRoute>
                <Route path="*">
                    <NotFound404 />
                </Route>
            </Switch>
        </Suspense>
    )
}

export default Routes
