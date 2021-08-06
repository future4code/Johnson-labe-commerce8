import styled from "styled-components";

export const EstiloCarrinho = styled.div`
  height: 100vh;
  background-color: white;
`;

export const Container = styled.div`
  width: 100%;
  /* height: 100%; */
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
  width: 100%;
  /* height: 100%; */
  align-items: flex-start;
  thead th {
    color: black;
    align-items: flex-start;
    padding: 12px;
  }
  tbody td {
    align-items: center;
    text-align: center;
    padding: 12px;
    border-bottom: 1px solid #eee;
  }
  img {
    height: 60px;
    width: 60px;
    border-radius: 10px;
  }
  strong {
    color: #333;
    display: block;
    font-size: 12px;
  }
  span {
    display: block;
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
    font-weight: bold;
    height: 20px;
    width: 50px;
    background-color: black;
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
