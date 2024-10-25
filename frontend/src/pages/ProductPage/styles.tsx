import styled from "styled-components";

export const NavigationTrail = styled.div`
  background-color: #F9F1E7; 
  margin-top: 0; 
  margin: 0 auto 50px; 
  width: 100%; 
  max-width: 1440px;
  height: 50px; 
  display: flex; 
  justify-content: flex-start;
  align-items: center; 
  padding-left: 110px; 

  .navigationTrail-container {
    display: flex;
    align-items: center; 
    gap: 20px; 
    
    span{
      font-size: 16px;
      font-weight: 400;
      line-height: 24px;
      color: #9F9F9F;
    }
  }

  .vertical-line {
    width: 2px; 
    height: 30px; 
    background-color: #9f9f9f; 
  }
`;
