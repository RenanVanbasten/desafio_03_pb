import styled,  { keyframes } from "styled-components";

export const FilterContainer = styled.div`
  margin-top: 0;
  margin-bottom: 10px;
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
    margin-bottom: 0;
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


const slideDown = keyframes`
  from {
    opacity: 0;
    transform: translateY(-50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const FiltersSection = styled.div`
  width: 170px; 
  background-color: #f9f1e7;
  border-radius: 8px;
  padding: 15px;
  font-size: 9pt;
  height: 170px;
  animation: ${slideDown} 0.5s ease-in-out;

  .filterSectionContainer {
    display: flex;
    flex-direction: column;
    gap: 5px; 
    margin-top: 10%;
  }

  label {
    display: flex;
    align-items: center;
    gap: 10px;
    justify-content: flex-start;
    margin-left: 20%;
  }
`;