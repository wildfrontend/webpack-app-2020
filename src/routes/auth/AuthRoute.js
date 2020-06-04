import React, { useCallback } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useMappedState } from 'redux-react-hook'
import * as actionAuth from 'reducers/auth'
const AuthRoute = ({ children, ...rest }) => {
    const mapState = useCallback((state) => state.auth)
    const auth = useMappedState(mapState)

    const checkRedirect = ({ location }) => {
        const CHECK_AUTH =
            auth.isAuthenticated || localStorage.getItem(actionAuth.AUTH_TOEKN)
        console.log(location)
        return CHECK_AUTH ? (
            children
        ) : (
            <Redirect
                to={{
                    pathname: '/auth/login',
                    state: { from: location },
                }}
            />
        )
    }

    return <Route {...rest} render={checkRedirect}></Route>
}

export default AuthRoute
