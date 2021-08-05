import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background-color: white;
  footer {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    button {
      margin-top: 30px;
      background: #191920;
      color: #fff;
      border: 0;
      border-radius: 4px;
      padding: 12px 20px;
      font-weight: bold;
      text-transform: uppercase;
    }
  }
`;

export const ProductTable = styled.table`
  display: flex;
  flex-direction: column;
  background-color: lightblue;
  width: 100%;
  thead th {
    color: black;
    align-items: center;
    padding: 12px;
  }
  tbody td {
    border-bottom: 1px solid #eee;
  }
  img {
    margin-left: 12px;
    height: 80px;
    width: 80px;
    border-radius: 10px;
  }
  strong {
    color: #333;
    /* display: block; */
    font-size: 12px;
  }
  span {
    /* display: block; */
    margin-top: 5px;
    font-size: 18px;
    font-weight: bold;
  }
  div {
    display: flex;
    align-items: center;
    input {
      border: 1px solid #ddd;
      border-radius: 4px;
      color: #666;
      padding: 6px;
      width: 50px;
    }
  }
  button {
    height: 20px;
    width: 50px;
    background-color: red;
    border-radius: 5px;
    color: #ddd;
  }
`;

export const Total = styled.div`
  display: flex;
  align-items: baseline;
  span {
    color: black;
    font-weight: bold;
  }
  strong {
    color: black;
    font-size: 20px;
    margin-left: 5px;
  }
`;
