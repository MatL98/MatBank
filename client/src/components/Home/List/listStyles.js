import styled from "styled-components";


export const TrStyle = styled.tr`
    display:flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid white;

    @media screen and (min-width: 480px) {
      {
        margin: 0.5rem;
        justify-content: center;
        align-items: center;
      }
    }
`


export const ListStyle = styled.td`

  font-size: 1rem;
  color: white;
  text-transform: capitalize;
  margin: 0 0.2rem;
  
  input{
    width: 3.5rem;
    border:none;
    background: transparent;
    color: white;
  }
  input:focus{
    width: 3.5rem;
    border:none;
    background-color: whitesmoke;
    color: #7729ee;
  }
  
  @media screen and (min-width: 480px) {
    {
      margin: 0.5rem;
    }
  }

  `

export const ButtonStyle = styled.button`
  margin: 0.5rem;
  border-radius: 5px;
  border: none;
  padding: 0.2rem;
  height: 1.9rem;
  color: white;
  background-color: #7729ee;
`
