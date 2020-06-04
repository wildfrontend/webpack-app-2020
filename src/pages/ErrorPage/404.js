import React from 'react'
import { useLocation } from 'react-router-dom'

const NotFound404 = () => {
    const location = useLocation()
    console.log(location)
    return (
        <div>
            <h1>404</h1>
            <h3>
                No match for <code>{location.pathname}</code>
            </h3>
        </div>
    )
}

export default NotFound404
