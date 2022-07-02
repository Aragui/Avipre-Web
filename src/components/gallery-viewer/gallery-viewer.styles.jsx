const { default: styled } = require("styled-components");

export const Background = styled.div`
    position: fixed;

    top: 0;
    right: 0;
    left: 0;

    height: 100%;

    overflow: hidden;

    z-index: 1022;

    background-color: #00000088;
    
    display: ${(props) => props.show ? 'flex' : 'none'};
    justify-content: center;
    align-items: center;

    .image-modal{
        position: relative;
    }

    @media (min-width: 900px){
        .image{
            max-width: 70vw;
            max-height: 90vh;
        }
    }

    .image{
        max-width: 90vw;
        max-height: 90vh;
        display: none;
    }

    .active{
        display: block;
    }

    .buttons{
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        
        z-index: 1022;
        
        display: flex;
        justify-content: space-between;
        align-items: center;
        
    }
    
    .buttons > button, .close{
        height: 50px;
        width: 50px;
        
        background-color: #00000044;
        border-style: solid;
        border-color: white;
        border-width: 3px;
        
        transition: background-color ease-in-out 0.2s;
        
        color: white;
        
        font-size: 24px;

        @media (min-width: 900px){
            &:hover{
                background-color: #b9b9b999;
            }
            
            &:active{
                background-color: #00000044;
            }
        }

    }
    
    .close{
        position: absolute;

        top: 0;
        right: 0;

        z-index: 1022;
    }

    .dots{
        position: absolute;

        right: 0;
        bottom: 0;
        left: 0;

        z-index: 1023;
        
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
    }

    .dot{
        width: 15px;
        height: 15px;

        border-radius: 50%;

        background-color: #00000044;
        border-style: solid;
        border-color: white;
        border-width: 3px;

        margin-left: 2px;
        margin-right: 2px;
    }

    .active{
        background-color: #FFFFFF;
    }
    `;