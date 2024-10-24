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
    max-width: 1440px;
    margin: 0 auto;
    justify-content: center;

    .container-images {
      display: flex;
      margin: 20px 0;
      align-items: flex-start;

      .thumbnail {
        display: flex;
        flex-direction: column;
        margin-left: 100px;

        img {
          margin-bottom: 10px;
          width: 80px;
          height: auto;
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
      justify-content: space-between;
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
        line-height: 36px;
        color: #9f9f9f;
      }

      .rate {
        margin-bottom: 10px;

        span {
          display: block;
          margin-bottom: 5px;
          font-size: 13px;
          font-weight: 400;
          line-height: 19.5px;
          color: #9f9f9f;
        }

        p {
          margin-top: 0;
          font-size: 13px;
          font-weight: 400;
          line-height: 19.5px;
        }
      }

      .size,
      .color {
        display: flex;
        flex-direction: column;
        margin-bottom: 20px;
        align-items: flex-start;

        span {
          margin-bottom: 5px;
          color: #9f9f9f;
          font-size: 14px;
          font-weight: 400;
          line-height: 21px;
        }

        .button-style {
          display: flex;
          gap: 5px;
        }

        button {
          width: 40px;
          height: 40px;
          border-radius: 3px;
          border-style: none;
          background-color: transparent;
          color: black;
          cursor: pointer;
        }

        button.selected {
          background-color: #b88e2f;
          color: #fff;
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

        button.color-selected {
          border: 5px solid #b6bde4;
        }
      }

      .color button {
        border-radius: 50%;
      }

      .product-controls {
        display: flex;
        margin-top: 20px;
        gap: 10px;

        button {
          border-radius: 15px;
          border: 1px solid;
          font-size: 20px;
          line-height: 30px;
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
          justify-content: flex-start;
          width: 100%;
        }

        .label {
          font-weight: bold;
          margin-right: 10px;
          width: 100px;
        }

        .value {
          flex: 1;
          margin-left: 10px;
        }

        .icons {
          display: flex;
          gap: 5px;
          align-items: center;
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

    h4 {
      text-align: center;
      margin: 20px 0;
    }

    p {
      text-align: center;
      font-size: 16px;
      margin: 0 auto;
      max-width: 800px;
    }
  }
`;
