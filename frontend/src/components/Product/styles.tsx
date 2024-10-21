import styled from "styled-components";

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; /* Centraliza o container na tela */
  justify-content: center; /* Centraliza verticalmente */
  width: 100%; /* Garante que ocupa 100% da largura da tela */
  max-width: 1440px; /* Define a largura máxima do componente */
  margin: 0 auto; /* Centraliza o container horizontalmente */

  .container {
    display: flex; /* Usando flexbox para alinhar lado a lado */
    width: 100%;
    max-width: 1440px; /* Define a largura máxima do componente */
    margin: 0 auto; /* Centraliza o container */
    justify-content: center; /* Centraliza os itens dentro do container */

    .container-images {
      display: flex; /* Mantém flexbox para a disposição */
      margin: 20px 0; /* Removido margin lateral para centralizar */
      align-items: flex-start; /* Alinha as miniaturas e a imagem principal ao topo */

      .thumbnail {
        display: flex;
        flex-direction: column; /* Alinha miniaturas verticalmente */
        margin-left: 100px;

        img {
          margin-bottom: 10px; /* Espaçamento entre miniaturas */
          width: 80px; /* Ajusta a largura das miniaturas */
          height: auto; /* Mantém a proporção das imagens */
        }
      }

      .main-image {
        width: 423px; /* Largura da imagem principal */
        height: 500px; /* Altura da imagem principal */
        object-fit: cover; /* Mantém a proporção da imagem */
      }
    }

    aside {
      flex: 1; /* O aside ocupa menos espaço */
      padding: 20px; /* Espaçamento interno */
      display: flex;
      flex-direction: column; /* Alinha os itens em coluna */
      justify-content: space-between; /* Distribui o espaço entre os itens */
      align-items: flex-start; /* Alinha os itens à esquerda */

      h2 {
        margin-bottom: 10px; /* Margem abaixo do título */
        font-size: 42px;
        font-weight: 400;
        line-height: 63px;
      }

      .price {
        font-size: 24px;
        font-weight: 500;
        line-height: 36px;
        color: #9f9f9f;
      }

      .rate {
        margin-bottom: 10px; /* Margem abaixo da taxa */

        span {
          display: block; /* Exibe o span em bloco para que fique em cima */
          margin-bottom: 5px; /* Margem abaixo do span */
          font-size: 13px;
          font-weight: 400;
          line-height: 19.5px;
          color: #9f9f9f;
        }

        p {
          margin-top: 0; /* Remove a margem superior para alinhamento */
          font-size: 13px;
          font-weight: 400;
          line-height: 19.5px;
        }
      }

      .size,
      .color {
        display: flex;
        flex-direction: column; /* Alinha texto e botões em coluna */
        margin-bottom: 20px; /* Margem abaixo do grupo size/color */
        align-items: flex-start; /* Alinha à esquerda */

        span {
          margin-bottom: 5px; /* Espaçamento abaixo do texto "Size" ou "Color" */
          color: #9f9f9f;
          font-size: 14px;
          font-weight: 400;
          line-height: 21px;
        }

        .button-style {
          display: flex; /* Alinha os botões horizontalmente */
          gap: 5px; /* Espaço menor entre os botões */
        }

        button {
          margin-left: 0; /* Sem margem à esquerda */
          width: 40px; /* Largura dos botões */
          height: 40px; /* Altura dos botões */
          border-radius: 3px; /* Bordas levemente arredondadas */
          border-style: none;
        }
        .bt-1 {
          background-color: #816dfa;
        }

        .bt-2 {
          background-color: black;
        }

        .bt-3 {
          background-color: #b88e2f;
        }
      }

      .color button {
        border-radius: 50%;
        border-style: none; /* Botões redondos para a cor */
      }

      .product-controls {
        display: flex; /* Alinha os botões horizontalmente */
        margin-top: 20px; /* Margem acima para espaçar do conteúdo acima */
        align-items: center; /* Alinha os botões verticalmente no centro */
        margin-left: 0; /* Remove qualquer margem à esquerda */
        justify-content: flex-start; /* Garante que os botões fiquem alinhados à esquerda */
        gap: 10px;

        button {
          border-radius: 15px; /* Bordas levemente arredondadas */
          border: 1px solid;
          margin-right: 5px; /* Espaço entre os botões */
          font-size: 20px;
          line-height: 30px;
          font-weight: 400;
          padding: 20px;
          background-color: white;
        }
      }

      .product-details {
        display: flex; /* Usando flexbox */
        flex-direction: column; /* Alinha os itens em coluna */
        margin: 0; /* Remove margem */
        gap: 10px; /* Espaçamento entre os itens */

        .sku,
        .category,
        .tags,
        .share {
          display: flex; /* Usando flexbox para alinhar os itens */
          justify-content: flex-start; /* Alinha todos à esquerda */
          width: 100%; /* Garante que ocupem toda a largura */
        }

        .label {
          font-weight: bold; /* Deixa o texto do label em negrito */
          margin-right: 10px; /* Espaço entre o label e o valor */
          width: 100px; /* Largura fixa para os labels */
        }

        .value {
          flex: 1; /* O valor ocupa o restante do espaço */
          display: flex; /* Usando flexbox para os ícones */
          align-items: center; /* Alinha os ícones verticalmente */
          gap: 10px; /* Espaço entre os ícones */
          margin-left: 10px; /* Margem esquerda para alinhar com os ícones */
        }

        .icons {
          display: flex; /* Alinha os ícones horizontalmente */
          gap: 5px; /* Espaçamento entre os ícones */
          align-items: center; /* Alinha os ícones verticalmente */
        }
      }

      height: auto; /* Pode ser ajustado se necessário, mas deve se adaptar à imagem principal */
    }
  }

  hr {
    margin: 20px 0; /* Margem para a linha horizontal */
    width: 100%; /* Garante que a linha horizontal ocupe toda a largura */
    max-width: 1440px; /* Limita a largura da linha horizontal */
  }

  .description {
    margin: 20px 0; /* Espaçamento para a descrição */
    width: 100%; /* Garante que a descrição ocupe toda a largura */
    max-width: 1440px; /* Limita a largura da descrição */

    h4 {
      text-align: center; /* Centraliza o texto */
      margin: 20px 0; /* Margem em cima e embaixo */
    }
  }
`;
