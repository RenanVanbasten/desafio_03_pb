import styled from "styled-components";

export const CategoriesContainer = styled.div`
  .container {
    display: flex;
    justify-content: center;
    width: 1440px;
    margin: 0 auto;
    top: 0px;
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
          transform: scale(1.1);
          opacity: 0.8;
        }

        h4 {
          padding: 15px;
        }
      }
    }
  }
`;
