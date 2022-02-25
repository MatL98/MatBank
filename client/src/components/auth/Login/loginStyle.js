import styled from "styled-components";

export const ContainerForm = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.5rem;

  @media screen and (min-width: 480px) {
    {
      justify-content: center;
      align-items: center;
    }
  }
`;

export const FormStyle = styled.form`
  width: 100%;
  min-height: 100%;
  margin: 0.5rem 0;
  background: rgba(255, 255, 255, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  min-height: 20rem;
  box-shadow: 0 25px 25px rgba(0, 0, 0, 0.5);
  border-top: 1px solid rgba(255, 255, 255, 0.1);

  h2 {
    position: relative;
    color: white;
    font-size: 1.5rem;
    font-weight: 600;
    letter-spacing: 1px;
    margin-bottom: 0.8rem;
  }
  h2::before {
    content: "";
    position: absolute;
    left: 0;
    bottom: -10px;
    width: 4rem;
    height: 0.3rem;
    background: white;
    border-radius: 5px;
  }

  input {
    margin: 0.5rem 0;
    width: 80%;
    border: none;
    border-radius: 35px;
    outline: none;
    background: rgba(255, 255, 255, 0.2);
    padding: 0.5rem 1.2rem;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    border-left: 1px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 5px 5px rgba(0, 0, 0, 0.1);
  }

  @media screen and (min-width: 768px) {
    {
      width: 500px;
    }
  }
`;
export const TitleDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;

  h1 {
    text-transform: uppercase;
    font-size: 1.8rem;
  }

  a {
    color: white;
  }
`;

export const PopUp = styled.div`
  display: flex;
  align-items: center;
  margin-top: 2rem;
  height: 2.2rem;
  width: 100%;
  border-radius: 35px;
  background: rgba(255, 255, 255, 0.2);
  padding: 0.5rem 1.2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  border-left: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.1);

  p {
    color: white;
    font-size: 1.3rem;
    font-weight: 600;
    letter-spacing: 1px;
  }
  @media screen and (min-width: 768px) {
    {
      width: 500px;
    }
  }
`;
export const PopUp2 = styled.div`
  display: flex;
  align-items: center;
  margin-top: 2rem;
  height: 2.2rem;
  border-radius: 35px;
  background: rgba(255, 255, 255, 0.2);
  padding: 0.5rem 1.2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  border-left: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.1);

  p {
    color: white;
    font-size: 1.3rem;
    font-weight: 600;
    letter-spacing: 1px;
  }
  @media screen and (min-width: 768px) {
    {
      width: 500px;
    }
  }
`;
