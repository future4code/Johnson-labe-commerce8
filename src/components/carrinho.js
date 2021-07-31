import React from "react";
import styled from "styled-components";

const EstiloCarrinho = styled.div`
  background-color: lightpink;
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
