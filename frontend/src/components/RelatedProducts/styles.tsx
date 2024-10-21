import styled from "styled-components";

export const ProductsContainer = styled.div`
  .container {
    display: flex;
    justify-content: center; /* Centraliza horizontalmente */
    width: 100%; /* Para ocupar a largura total */
    margin: 0 auto; /* Centraliza o container na tela */
  }

  .container-content {
    display: flex;
    flex-direction: column;
    align-items: center; /* Centraliza verticalmente */
    width: 100%; /* Para garantir que ocupe toda a largura */

    .container-title {
      display: flex;
      justify-content: center; /* Centraliza o título */
      margin-bottom: 20px; /* Espaçamento abaixo do título */
      margin-top: 40px;
    }

    .container-card {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-row-gap: 15px;
      width: 1200px;
      margin-bottom: 10px; /* Ajuste na margem inferior para ficar mais próximo do botão */
    }

    button {
      margin-bottom: 20px; /* Menor distância entre o botão e o hr */
      width: 245px;
      height: 48px;
      border: 1px solid #B88E2F;
      background-color: white;
      color: #B88E2F;
      font-size: 16px;
      font-weight: 600;
      line-height: 24px;
    }
  }

  hr {
    margin: 40px 0; /* Margem para a linha horizontal */
    width: 100%; /* Garante que a linha horizontal ocupe toda a largura */
    max-width: 1440px; /* Limite de largura para manter a consistência */
  }
`;
