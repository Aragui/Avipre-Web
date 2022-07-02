import styled from 'styled-components'

const InfoCard = styled.div`
    position: absolute;
    left: 0;
    bottom: 0;
    z-index: 100;

    width: 70%;
    /* height: 35%; */

    background-color: #00000092;

    transition: opacity 0.4s ease-in-out;

    padding: 10px;
    padding-top: 0;

    & > .text{
        font-size: 14px;
        color: white;
    }



    & > .divider{
        width: 90%;

        border-bottom: 2px solid white;
    }

    @media (min-width:900px){
        opacity: 0;
    }

`

const YearCard = styled.div`
    position: absolute;
    top: 0;
    right: 0;

    z-index: 100;

    width: 30%;
    height: 20%;

    background-color: #00000092;

    transition: opacity 0.4s ease-in-out;

    display: flex;
    justify-content: center;
    align-items: center;

    & > .year{
        color: white;
        margin: 0;
    }

    @media (min-width:900px){
        opacity: 0;
    }
`

const CardWrapper = styled.div`
    cursor: pointer;
    
    & > a > .image-container{
        position: relative;
        width: 100%;
        aspect-ratio: 4/3;

        overflow: hidden;

        & > img{
            width: 100%;
            height: 100%;
        }
    }

    & > a > .image-container:hover > ${InfoCard},
    & > a > .image-container:hover > ${YearCard}{
        opacity: 1;
    }

`

export { CardWrapper, InfoCard, YearCard }