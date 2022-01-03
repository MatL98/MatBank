import styled from "styled-components";


export const ContainerForm = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0.5rem;
`


export const FormStyle = styled.form`
    width: 100%;
    min-height: 100%;
    margin: 0.5rem 0;
    background: rgba(255,255,255, 0.1);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    min-height: 20rem;
    box-shadow: 0 25px 25px rgba(0,0,0, 0.5);
    border-top: 1px solid rgba(255,255, 255, 0.1);
    
    
    input{
        margin: 0.5rem 0;
        width: 80%;
        border: none;
        border-radius: 35px;
        outline: none;
        background: rgba(255,255,255, 0.2);
        padding: 0.5rem 1.2rem;
        border-top: 1px solid rgba(255,255, 255, 0.1);
        border-left: 1px solid rgba(255,255, 255, 0.1);
        box-shadow: 0 5px 5px rgba(0,0,0, 0.1);
    }

    @media screen and (min-width: 768px) {
        {
        width: 500px;
        }
    }
`
export const Select = styled.select`
    margin: 0.2rem;
    width: 80%;
    border: none;
    border-radius: 35px;
    outline: none;
    background: rgba(255,255,255, 0.2);
    cursor: pointer;
    border-top: 1px solid rgba(255,255, 255, 0.1);
    border-left: 1px solid rgba(255,255, 255, 0.1);
    box-shadow: 0 5px 5px rgba(0,0,0, 0.1);


    option {
        border: none;
        background-color: #7729ee;
        color: white;
    }
`
export const TitleDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;


    h1{
        text-transform: uppercase;
        font-size: 1.8rem;
    }


    a{
        color: white;
    }
`
