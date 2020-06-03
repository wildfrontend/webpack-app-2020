import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'

import { StoreContext } from 'redux-react-hook'
import store from './store/configureStore'

import App from './App'

const Root = () => {
    return (
        <Router>
            <StoreContext.Provider value={store()}>
                <App></App>
            </StoreContext.Provider>
        </Router>
    )
}

ReactDOM.render(<Root />, document.getElementById('app'))
