import styled from "styled-components";

export const FooterContainer = styled.div`
  padding: 0 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1440px;
  margin: 0 auto;

  .footer-top {
    padding: 30px 0;
    display: flex;
    justify-content: space-between;
    width: 100%; 
    h4 {
      font-size: 24px;
      font-weight: 700;
      line-height: 38px;
    }

    p {
      font-size: 16px;
      font-weight: 400;
      color: #9f9f9f;
      margin-right: 30px;
      margin-top: 19px;
    }

    ul {
      list-style: none;
      font-size: 16px;
      font-weight: 500;
      line-height: 24px;

      li {
        margin: 30px;
      }
    }
  }

  hr {
    border: none;
    height: 2px;
    background-color: #d9d9d9;
    margin: 0 0 30px;
    width: 100%;
    max-width: 1440px;
  }

  .bottom-footer {
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    margin-left: 0;
    width: 100%;
    margin-bottom: 20px;
  }
`;
