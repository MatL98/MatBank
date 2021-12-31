import styled from "styled-components";


export const HomeStyle = styled.div`

  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0.5rem;

  @media screen and (min-width: 480px) {
    {
      margin: 2rem;
    }
  }
`
export const BalanceDiv = styled.div`
  
  display: flex;
  flex-direction: column;

  a{
    color: white;
    text-transform: capitalize;
  }
`

export const TableStyle = styled.table`

  display: flex;
  flex-direction: column;
  justify-content: center;
  border-collapse: collapse;
  border-radius: 5px;
  margin: 1.6rem 0rem;
  font-size: 1.1rem;
  overflow: hidden;

  
  thead tr{
    background-color: #7729ee;
    color: white;
    text-align: center;
    border-radius: 10px 10px 0 0;
    font-weight: bold;
  }

  td, th{
    padding: 0.5rem 0.5rem;
  }

`




