import styled from "styled-components";


export const HomeStyle = styled.div`

  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0.5rem;

  @media screen and (min-width: 480px) {
    {
      justify-content: center;
      align-items: center;
    }
  }
` 
export const BalanceDiv = styled.div`
  
  display: flex;
  flex-direction: column;
  justify-content: left;

  a{
    color: white;
    text-transform: capitalize;
  }
  
  button{
    background: none;
    border: none;
    color: white;
    width: 50%;
    text-align: left;
    text-decoration: underline;
  }
`

export const TableStyle = styled.table`

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-collapse: collapse;
  border-radius: 5px;
  margin: 1.6rem 0rem;
  font-size: 1.1rem;
  overflow: hidden;

  
  thead > tr{
    background-color: #7729ee;
    color: white;
    text-align: center;
    font-weight: bold;

  }
  tbody{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  @media screen and (min-width: 480px) {
    {
      width: 35%;
    }
    tbody{
      width: 100%;
    }
  }

  th{
    padding: 0.5rem 0.5rem;
  }

`




