import styled from "styled-components";

export const Cards = styled.div`
  .card {
    display: flex;
    flex-direction: column;
    max-width: 285px;
    max-height: 446px;
    background-color: #f4f5f7;
    position: relative; /* Necessário para o posicionamento absoluto do overlay e das tags */

    img {
      height: 301px;
      width: 285px;
    }

    /* Container das tags (New e Desconto) */
    .tag-container {
      position: absolute;
      top: 15px;
      right: 15px;
      display: flex;
      gap: 8px; /* Adiciona um espaço entre as tags */
    }

    /* Estilos das tags de "New" e "Desconto" */
    .new-tag,
    .discount-tag {
      position: relative; /* Ajustando a posição relativa dentro do container */
      width: 48px;
      height: 48px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      font-size: 12px;
      font-weight: bold;
      color: white;
      z-index: 10;
    }

    .new-tag {
      background-color: #2ec1ac; /* Cor verde para o New */
    }

    .discount-tag {
      background-color: #e97171; /* Cor vermelha para o desconto */
    }

    .card-text {
      padding: 20px 10px;

      .price {
        display: flex;
        justify-content: space-between;

        h4 {
          font-size: 24px;
          font-weight: 600;
          line-height: 28.8px;
        }

        h5 {
          font-size: 15px;
          font-weight: 600;
          line-height: 30px;
        }
      }
    }

    .overlay {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background: rgba(0, 0, 0, 0.5);
      opacity: 0;
      transition: opacity 0.3s;
      text-align: center;

      .see-details {
        background-color: white;
        border: none;
        color: #b88e2f;
        padding: 10px 20px;
        cursor: pointer;
        margin-bottom: 10px;
        width: 70%;
      }

      .icon-container {
        display: flex;
        justify-content: center;
        margin-top: 10px;

        .icon-item {
          display: flex;
          align-items: center;
          margin: 0 5px;
          color: white;

          img {
            margin-right: 5px;
            width: 24px;
            height: 24px;
          }
        }
      }
    }

    &:hover {
      filter: brightness(1.0);
      .overlay {
        opacity: 1; /* Mostra o overlay no hover */
      }
    }
  }
`;
