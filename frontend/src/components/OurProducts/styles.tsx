import styled from "styled-components";

export const ProductsContainer = styled.div`
  .container {
    display: flex;
    flex-direction: column;
    align-items: center; /* Centraliza o conteúdo verticalmente */
    width: 100%;
    margin: 0 auto; /* Centraliza horizontalmente */
  }

  .container-title {
    display: flex;
    justify-content: center; /* Centraliza o título */
    margin-bottom: 20px; /* Espaçamento abaixo do título */
  }

  .container-card {
    display: grid;
    grid-template-columns: repeat(4, 1fr); /* Organiza em 4 colunas */
    grid-gap: 20px; /* Espaçamento entre os cards */
    justify-items: center; /* Centraliza os cards individualmente */
    width: 100%;
    max-width: 1200px; /* Limita a largura máxima */
    margin-bottom: 20px;
  }

  button {
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
