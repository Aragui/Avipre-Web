import styled from 'styled-components'

const Card = styled.div`
    cursor: pointer;

    
    &>div{
        position: relative;
    
        height: 250px;

        & > img{
            object-fit: cover;
        }
    }
`

export { Card }