import React from 'react'
import Head from 'components/Head/Head'
import Routes from 'routes'
import { hot } from 'react-hot-loader/root'
const App = () => {
    return (
        <div>
            <Head />
            <Routes />
        </div>
    )
}

export default hot(App)
