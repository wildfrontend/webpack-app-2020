import React from 'react'
import { useRouteMatch, Switch, Route } from 'react-router-dom'
import Login from 'pages/Auth/Login'

const RoutesAuth = () => {
    const { url } = useRouteMatch()
    return (
        <Switch>
            <Route path={`${url}/login`}>
                <Login />
            </Route>
        </Switch>
    )
}

export default RoutesAuth
