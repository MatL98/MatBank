import styled from "styled-components";

export const CardStyle = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    height: 20rem;
    opacity: 0.7;
    backdrop-filter blur(10px);
    box-shadow: 0 25px 25px rgba(0,0,0, 0.5);
    border-radius: 20px;
    overflow: hidden;
    border-top: 1px solid rgba(255,255, 255, 0.1);
    margin-top: 0.5rem;

    :before{
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 80px;
        background-color: #7729ee;
    }

    @media screen and (min-width: 768px) {
        {
          width: 500px;
        }
        
`;

export const ContentStyle = styled.p`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 5rem;
  color: black;
  font-size: 2rem;
`;

export const ContentStyleCash = styled.p`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 2.2rem;
  color: white;
  font-size: 1.8rem;
`;
