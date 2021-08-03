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

const Itens = styled.div`
  display: flex;
  height: 24px;
`

const itensCarrinho = [

]

const removerItem = (props) => {

};

// const listaCarrinho = itensCarrinho.map((item) => {
//   return <li>{item}</li>
// }

export default class Carrinho extends React.Component {
  state = {
    produto: [
      { quantidade: '', produtoNome: '' },
      { quantidade: '', produtoNome: '' },
      { quantidade: '', produtoNome: '' },
      { quantidade: '', produtoNome: '' }
    ],
  };

  render() {
    return (
      <>
      <EstiloCarrinho>
        <h3>Carrinho</h3>
        <p>Valor total:</p>
      <Itens>
        <ul>{itensCarrinho}</ul>
        <button onClick={removerItem}>X</button>
      </Itens>
      </EstiloCarrinho>
      </>
    );
  }
}