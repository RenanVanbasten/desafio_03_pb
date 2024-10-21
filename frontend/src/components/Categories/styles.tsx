import styled from "styled-components";

export const CategoriesContainer = styled.div`
  .container {
    display: flex;
    justify-content: center;
    width: 1440px;
    margin: 0 auto;
    top: 0px; /* Centraliza o container horizontalmente */
  }

  .container-content {
    display: flex;
    flex-direction: column;

    .container-title {
      display: flex;
      justify-content: center;
      padding: 40px;
    }

    .container-card {
      display: flex;
      justify-content: center;

      .card-image {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        margin: 10px;

        img:hover {
          transform: scale(1.1); /* Aumenta a imagem no hover */
          opacity: 0.8; /* Altera a opacidade */
        }

        h4 {
          padding: 15px;
        }
      }
    }
  }
`;
