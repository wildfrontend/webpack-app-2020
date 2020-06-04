import React from 'react'
import { useRouteMatch, useParams } from 'react-router-dom'
import NotFound404 from 'pages/ErrorPage/404'
const topics = [
    { id: 1, name: 'apple' },
    { id: 2, name: 'banana' },
    { id: 3, name: 'cat' },
    { id: 4, name: 'dog' },
]

const Topic = () => {
    const { url } = useRouteMatch()
    const { id } = useParams()
    if (topics.some((topic) => topic.id === id)) {
        return (
            <div>
                Topic:{id}
                <pre>url:{url}</pre>
            </div>
        )
    }
    return <NotFound404 />
}

export default Topic
