import styled from "styled-components";

export const ProductsContainer = styled.div`
  .container {
    display: flex;
    justify-content: center;
    width: 100%; 
    margin: 0 auto; 
  }

  .container-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    .container-card {
      display: grid;
      grid-template-columns: repeat(4, 1fr); 
      grid-column-gap: 20px; 
      grid-row-gap: 20px; 
      justify-items: center; 
      width: 100%; 
      max-width: 1200px; 
      margin-bottom: 20px;
    }

    .container-buttons {
      display: flex;
      gap: 30px;
    }

    .button-control {
      margin-bottom: 60px;
      margin-top: 30px;
      width: 60px;
      height: 60px;
      border-radius: 10px;
      border: none;
      background-color: #faf3ea;
      color: black;
      font-size: 16px;
      font-weight: 600;
      line-height: 24px;
      cursor: pointer;
    }

    .button-control:hover {
      border: solid 2px black;
    }
  }
`;
