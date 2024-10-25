import styled from "styled-components";

export const FeatureContainer = styled.div`
  height: 270px;
  width: 1440px;
  background-color: #FAF3EA;
  display: flex;
  justify-content: center;
  padding: 80px;
  margin: 0 auto;

  .container-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
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
