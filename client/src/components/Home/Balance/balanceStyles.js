import styled from "styled-components";

export const BalanceStyle = styled.div`


`
export const CardStyle = styled.div`
    position: relative;
    width: 500px;
    height: 300px;
    background-color: white;
    opacity: 0.1;
    backdrop-filterL blur(10px);
    box-shadow: 0 25px 25px rgba(0,0,0, 0.5);
    border-radius: 20px;
    overflow: hidden;
    border-top: 1px solid rgba(255,255, 255, 0.1);

    :before{
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 80px;
        background-color: #7729ee;
    }
`

export const ContentStyle = styled.p`

    color: white;

`

