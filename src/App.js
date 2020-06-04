import React from 'react'
import { hot } from 'react-hot-loader/root'
import Routes from 'routes'
import { Link } from 'react-router-dom'

const App = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">about</Link>
                </li>
                <li>
                    <Link to="/topics">Topics</Link>
                </li>
                <li>
                    <Link to="/dashboard">Dashboard</Link>
                </li>
            </ul>
            <Routes />
        </div>
    )
}

export default hot(App)
