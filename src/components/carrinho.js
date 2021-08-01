import React from "react";
import styled from "styled-components";

const EstiloCarrinho = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 99%;
  border: 1px solid black;
  background-color: lightyellow;
  color: black;
`;

class Carrinho extends React.Component {
  render() {
    return (
      <EstiloCarrinho>
        <h3>Carrinho</h3>
        <p>Valor total:</p>
      </EstiloCarrinho>
    );
  }
}

export default Carrinho;
