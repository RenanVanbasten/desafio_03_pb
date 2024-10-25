import styled from "styled-components";

export const ProductsContainer = styled.div`
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin: 0 auto;
  }

  .container-title {
    display: flex;
    justify-content: center; 
    margin-bottom: 20px; 
  }

  .container-card {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 20px;
    justify-items: center;
    width: 100%;
    max-width: 1200px; 
    margin-bottom: 20px;
  }

  .show-more {
    margin-top: 20px;
    margin-bottom: 90px;
    width: 245px;
    height: 48px;
    border: 1px solid #b88e2f;
    background-color: white;
    color: #b88e2f;
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
    cursor: pointer; 
    transition: all 0.3s ease;

    &:hover {
      background-color: #b88e2f;
      color: white;
    }
  }
`;
