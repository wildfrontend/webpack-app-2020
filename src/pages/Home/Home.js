import React from 'react'
import * as S from './Home.emotion'

const Home = () => {
    console.log('test')
    console.error('test')

    return (
        <div>
            Home Page
            <div>
                <S.Container></S.Container>
            </div>
            <div>
                <S.Font>taessgadssa</S.Font>
            </div>
        </div>
    )
}

export default Home
