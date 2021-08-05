import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  /* height: 100%; */
  /* padding: 30px; */
  background-color: white;
  /* background: #fff; */
  /* border-radius: 4px; */
  footer {
    display: flex;
    /* margin-top: 30px; */
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
      /* transition: background 0.2s; */
    }
  }
`;

export const ProductTable = styled.table`
  display: flex;
  flex-direction: column;
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
    background: none;
    border: 0;
    padding: 6px;
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
