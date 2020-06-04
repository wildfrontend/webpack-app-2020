import React from 'react'
import { useDispatch } from 'redux-react-hook'
import * as actionAuth from 'reducers/auth'
import { useHistory, useLocation } from 'react-router-dom'
const Login = () => {
    const dispatch = useDispatch()

    const history = useHistory()
    const location = useLocation()
    const { from } = location.state || { from: { pathname: '/' } }

    const login = () => {
        dispatch(actionAuth.loginAuth())
        history.replace(from)
    }
    
    return (
        <div>
            Login
            <br />
            <p>You must log in to view the page at {from.pathname}</p>
            <button onClick={login}>Sign In</button>
        </div>
    )
}

export default Login
