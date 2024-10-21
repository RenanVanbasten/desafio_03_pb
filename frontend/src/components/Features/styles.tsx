import styled from "styled-components";

export const FeatureContainer = styled.div`
  height: 270px;
  width: 1440px;
  background-color: #FAF3EA;
  display: flex;
  justify-content: center; /* Centraliza o conteúdo do contêiner */
  padding: 80px;
  margin: 0 auto; /* Centraliza o FeatureContainer na tela */

  .container-content {
    display: flex; /* Permite que os elementos internos fiquem lado a lado */
    justify-content: space-between; /* Mantém os itens espaçados */
    align-items: center;
    width: 100%; /* Faz o conteúdo ocupar toda a largura do contêiner */
  }

  img {
    width: 60px;
    height: 60px;
  }

  .content-features {
    display: flex;
    gap: 4px;
  }

  .text-features {
    h3 {
      font-weight: 600;
      font-size: 25px;
      line-height: 37.5px;
    }

    p{
      font-size: 20px;
      font-weight: 500;
      line-height: 30px;
      color: #898989;
    }
  }
`;
