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

    .container-title {
      display: flex;
      justify-content: center;
      margin-bottom: 20px;
      margin-top: 40px;
    }

    .container-card {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-row-gap: 15px;
      width: 1200px;
      margin-bottom: 10px;
    }
  }

  hr {
    margin: 60px 0;
    width: 100%;
    max-width: 1440px;
  }

  button {
    margin-top: 30px;
    margin-bottom: 20px;
    width: 245px;
    height: 48px;
    border: 1px solid #b88e2f;
    background-color: white;
    color: #b88e2f;
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
    cursor: pointer; /* Adiciona um cursor de ponteiro para o botão */
    transition: all 0.3s ease;

    &:hover {
      background-color: #b88e2f;
      color: white;
    }
  }
`;
