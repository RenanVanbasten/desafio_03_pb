import styled from "styled-components";

export const FilterContainer = styled.div`
  margin-top: 0;
  margin-bottom: 50px;
  display: flex;
  justify-content: space-around;
  gap: 20px;

  .filter-container {
    width: 1440px;
    height: 100px;
    background-color: #f9f1e7;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  div {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .filter-icons {
    gap: 25px;
    cursor: pointer;
  }

  .vertical-line {
    width: 2px;
    height: 30px;
    background-color: #9f9f9f;
  }

  input[name="show"] {
    width: 55px;
    height: 55px;
    border: none;
    text-align: center;
    line-height: 55px;
  }

  input[name="short-by"] {
    width: 288px;
    height: 55px;
    border: none;
    text-align: center;
    line-height: 55px;
  }
`;

export const FiltersSection = styled.div`
  width: 1440px;
  margin: 20px auto;
  background-color: #f4f4f4;
  padding: 20px;
  border-radius: 8px;

  h3 {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 15px;
  }

  .filter-group {
    display: flex;
    flex-direction: column;
    gap: 10px;

    label {
      font-size: 16px;
      display: flex;
      align-items: center;
      gap: 10px;
    }

    input[type="checkbox"] {
      width: 20px;
      height: 20px;
    }
  }
`;
