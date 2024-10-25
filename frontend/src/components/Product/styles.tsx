import styled from "styled-components";

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;

  .container {
    display: flex;
    width: 100%;
    justify-content: center;
    margin: 20px 0;

    .container-images {
      display: flex;
      align-items: flex-start;

      .thumbnail {
        display: flex;
        flex-direction: column;
        margin-left: 100px;

        img {
          margin-bottom: 10px;
          width: 80px;
          cursor: pointer;
          border-radius: 10px;
        }
      }

      .main-image {
        width: 423px;
        height: 500px;
        object-fit: cover;
        margin-left: 20px;
        border-radius: 10px;
      }
    }

    aside {
      flex: 1;
      padding: 20px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      h2 {
        margin-bottom: 10px;
        font-size: 42px;
        font-weight: 400;
        line-height: 63px;
      }

      .price {
        font-size: 24px;
        font-weight: 500;
        color: #9f9f9f;
      }

      .rate {
        margin-bottom: 10px;

        span {
          display: block;
          font-size: 13px;
          font-weight: 400;
          color: #9f9f9f;
        }

        p {
          font-size: 13px;
          font-weight: 400;
          line-height: 19.5px;
        }
      }

      .size {
        display: flex;
        flex-direction: column;
        margin-bottom: 20px;

        span {
          margin-bottom: 5px;
          color: #9f9f9f;
          font-size: 14px;
          font-weight: 400;
        }
        .button-size-style {
          display: flex;
          gap: 20px;
        }
        button {
          height: 30px;
          width: 30px;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }

        .size-selected {
          background-color: #B88E2F;
          color: #fff;
        }
      }

      .color {
        display: flex;
        flex-direction: column;
        margin-bottom: 16px;

        span {
          margin-bottom: 5px;
          color: #9f9f9f;
          font-size: 14px;
          font-weight: 400;
        }

        .button-color-style {
          display: flex;
          gap: 16px;
        }
        button {
          height: 30px;
          width: 30px;
          border: none;
          border-radius: 50%;
          cursor: pointer;
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

        .color-selected {
          border: 5px solid #bdb4ee;
        }
      }

      .product-controls {
        display: flex;
        margin-top: 20px;
        gap: 10px;

        button {
          border-radius: 15px;
          border: 1px solid;
          font-size: 20px;
          padding: 20px;
          background-color: white;
        }
      }

      .product-details {
        display: flex;
        flex-direction: column;
        gap: 10px;

        .sku,
        .category,
        .tags,
        .share {
          display: flex;
          align-items: center;
          width: 100%;
          justify-content: flex-start;
        }

        .label {
          font-weight: bold;
          width: 100px;
        }

        .value {
          flex: 1;
          margin-left: 10px;
        }

        .icons {
          margin-left: 10px;
          display: flex;
          gap: 30px;
          align-items: center;

          button {
            background-color: transparent;
            border: none;
            padding: 0;
            cursor: pointer;
            display: flex;
            align-items: center;

            img {
              width: 24px;
              height: 24px;
            }
          }
        }
      }
    }
  }

  hr {
    margin: 20px 0;
    width: 100%;
    max-width: 1440px;
  }

  .description {
    margin: 20px 0;
    width: 100%;
    max-width: 1440px;
    display: flex;
    flex-direction: column;
    align-items: center;

    .description-title {
      display: flex;
      gap: 52px;
      font-size: 24px;
    }

    .description-text {
      text-align: justify;
      font-size: 16px;
      max-width: 800px;
      margin-top: 20px;
      color: #9f9f9f;
    }
  }
`;
