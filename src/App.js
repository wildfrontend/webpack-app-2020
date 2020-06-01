import { hot } from 'react-hot-loader/root'
import React, { useState } from 'react'

const App = () => {
    const title = 'Reddst asdg B fasddsdfgf '
    const [count, setCount] = useState(1)
    return (
        <div>
            <div>{title}</div>
            <div>{count}</div>
            <button
                onClick={() => {
                    setCount(count + 1)
                }}
            >
                count
            </button>
        </div>
    )
}

export default hot(App)