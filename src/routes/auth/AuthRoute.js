import React, { useCallback } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useMappedState } from 'redux-react-hook'

const AuthRoute = ({ children, ...rest }) => {
    const mapState = useCallback((state) => state.auth)
    const auth = useMappedState(mapState)
    console.log('auth', auth)
    return (
        <Route
            {...rest}
            render={({ location }) => {
                if (auth.isAuthenticated) {
                    return children
                } else {
                    return (
                        <Redirect
                            to={{
                                pathname: '/auth/login',
                                state: { from: location },
                            }}
                        />
                    )
                }
            }}
        ></Route>
    )
}

export default AuthRoute
