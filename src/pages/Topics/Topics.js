import React from 'react'
import { Link, useRouteMatch } from 'react-router-dom'

const topics = [
    { id: 1, name: 'apple' },
    { id: 2, name: 'banana' },
    { id: 3, name: 'cat' },
    { id: 4, name: 'dog' },
]
const Topics = () => {
    const { url } = useRouteMatch()
    return (
        <div>
            Topics
            <ul>
                {topics.map((topic, i) => {
                    return (
                        <li key={i}>
                            <Link to={`${url}/${topic.id}`}>{topic.name}</Link>
                        </li>
                    )
                })}
                <li>
                    <Link to={`${url}/24/asdg/asdg/sdg/g`}>errror test</Link>
                </li>
            </ul>
        </div>
    )
}

export default Topics
