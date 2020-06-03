import styled from '@emotion/styled'
import test_bg from 'assets/images/test_image.jpeg'
import test_font from 'assets/fonts/biorhyme-expanded-v5-latin/biorhyme-expanded-v5-latin-regular.woff'
export const Container = styled.div`
    width: 400px;
    height: 300px;
    background-image: url(${test_bg});
`

export const Font = styled.div`
    body {
        @font-face {
            font-family: 'test_font';
            src: url(${test_font});
        }
    }
    font-family: 'test_font';
    font-size: 20px;
`
