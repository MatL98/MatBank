import styled from "styled-components";


export const ListStyle = styled.td`
  font-size: 1rem;
  color: white;
  text-transform: capitalize;
  border-bottom: 1px solid whitesmoke;

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

  `
export const TrStyle = styled.tr`
    display:flex;
    flex-direction: row;
    justify-content: center;
    height: 50%;
`
export const ButtonStyle = styled.button`
  margin: 0.2rem;
  border-radius: 5px;
  border: none;
  padding: 0.2rem;
  height: 2rem;
  color: white;
  background-color: #7729ee;
`
