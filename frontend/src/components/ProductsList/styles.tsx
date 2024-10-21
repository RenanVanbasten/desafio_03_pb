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

    .container-card {
      display: grid;
      grid-template-columns: repeat(4, 1fr); /* 4 colunas uniformes */
      grid-column-gap: 20px; /* Espaçamento horizontal entre os cards */
      grid-row-gap: 20px; /* Espaçamento vertical entre os cards */
      justify-items: center; /* Centraliza os itens individualmente */
      width: 100%; /* O container ocupará 100% da largura disponível */
      max-width: 1200px; /* Limita a largura máxima para um layout mais consistente */
      margin-bottom: 20px;
    }

    .container-buttons {
      display: flex;
      gap: 30px;
    }

    button {
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
    }
  }
`;
