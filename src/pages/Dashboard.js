import React from 'react'
import { useDispatch } from 'redux-react-hook'
import * as actionAuth from 'reducers/auth'

const Dashboard = () => {
    const dispatch = useDispatch()
    const logOut = () => dispatch(actionAuth.logoutAuth())

    return (
        <div>
            Dashboard
            <br />
            <button onClick={logOut}>logOut</button>
        </div>
    )
}

export default Dashboard
