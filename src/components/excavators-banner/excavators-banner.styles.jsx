import styled from 'styled-components'

const BannerWrapper = styled.div`
    width: 100%;

    background-color: #CCCDCD;

    .banner-cover{
        width: 100%;

        @media (max-width: 1000px) {
         max-width: 500px;
        }

        @media (min-width: 1000px){
            margin-left: calc(5vw);
        }
    }

    .banner-title{
        color: #6D6E71;
    }

    .banner-subtitle{
        color: #6D6E71;
    }

    .banner-list{
        color: #6D6E71;

        list-style: '- ';
    }
`

export { BannerWrapper }