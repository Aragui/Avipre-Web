import styled from 'styled-components'

const BannerBackground = styled.div`
    background-color: #6D6E71;
    height: 530px;
    width: 100vw;
    display: flex;
    justify-content: center;
    
    padding: 0 !important;
    .cover-wrapper{ 
        position: relative;
        z-index: 0;

        &::before{
            position: absolute;

            left: 0;
            top: 0;
            right: 0;
            bottom: 0;

            content: ' ';

            z-index: 1;

            background: #00000039;
        }
    }

    .cover{
        width: 100%;
        height: 100%;

        aspect-ratio: 16/9;
        object-fit: cover;
    }

    .title-wrapper{
        position: absolute;

        top: 0;
        right: 0;
        bottom: 0;
        left: 0;

        z-index: 2;

        display: flex;
        justify-content: center;
        align-items: center;
    }

    .title{
        color: #FFF;
        text-shadow: 0 0 5px #000;
    }
`;

export { BannerBackground }