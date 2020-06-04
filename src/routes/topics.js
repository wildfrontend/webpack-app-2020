import React from 'react'
import { Switch, Route, useRouteMatch } from 'react-router-dom'

import Topics from 'pages/Topics/Topics'
import Topic from 'pages/Topics/Topic/Topic'

const Routes = () => {
    const { url } = useRouteMatch()
    console.log(url)
    return (
        <Switch>
            <Route exact path={url}>
                <Topics />
            </Route>
            <Route path={`${url}/:id`}>
                <Topic />
            </Route>
        </Switch>
    )
}

export default Routes
