import React from 'react'
import { Link } from 'react-router-dom'
import './Head.scss'

const Head = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/product">product</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Head
