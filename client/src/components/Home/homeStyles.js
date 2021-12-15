import styled from "styled-components";


const HomeStyle = styled.div`

  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0.5rem;

  a{
    color: white;
  }

  table{
    display: flex;
    flex-direction: column;
    justify-content: right;
  }
  tbody{
    display: flex;
    flex-direction: column;
    justify-content: right;
  }
  thead{
    display: flex;
    justify-content: right
    margin: 0 1rem;
    color: white;
  }

  @media screen and (min-width: 480px) {
    {
      margin: 2rem;
    }
    thead{
      font-size: 1.5rem;
      display: flex;
      justify-content: right;
      margin: 0 1rem;
      letter-spacing: 0.3rem;
    }
  }
`

export default HomeStyle

