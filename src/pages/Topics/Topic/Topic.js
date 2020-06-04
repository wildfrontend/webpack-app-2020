import React from 'react'
import { useRouteMatch, useParams } from 'react-router-dom'

const Topic = () => {
    const { url } = useRouteMatch()
    const { id } = useParams()
    return (
        <div>
            Topic:{id}
            <pre>url:{url}</pre>
        </div>
    )
}

export default Topic
