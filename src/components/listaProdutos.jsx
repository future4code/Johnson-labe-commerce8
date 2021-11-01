import React from "react";
import styled from "styled-components";

const Item = styled.ul`
  padding: 0;
  border: 2px solid black;
  border-radius: 10px;

  li {
    display: flex;
    flex-direction: column;
    background: #fff;
    border-radius: 10px;
    padding: 20px;

    img {
      align-items: center;
      width: 200px;
      height: 200px;
      border-radius: 10px;
    }

    > strong {
      font-size: 16px;
      line-height: 20px;
      color: #333;
      margin-top: 10px;
    }

    > span {
      font-size: 20px;
      font-weight: bold;
      margin: 5px 0 20px;
      color: #333;
    }

    button {
      background: green;
      color: #fff;
      border: 0;
      border-radius: 4px;
      overflow: hidden;
      margin-top: auto;
      display: flex;
      align-items: center;
      height: 50px;

      &:hover {
        background: #009b00;
      }

      div {
        display: flex;
        align-items: center;
        padding: 12px;
        background: rgba(0, 0, 0, 0.1);

        svg {
          margin-right: 5px;
        }
      }

      span {
        flex: 1;
        text-align: center;
        font-weight: bold;
      }
    }
  }
`;

class ListaProdutos extends React.Component {
  render() {
    const produto = this.props.produto;
    return (
      <Item>
        <li>
          <img src={produto.foto} alt={produto.nome} />
          <strong>{produto.nome}</strong>
          <span>R${produto.preco},00</span>
          <button type="button" onClick={this.props.addProdutoAoCarrinho}>
            <span>COMPRAR</span>
          </button>
        </li>
      </Item>
    );
  }
}
export default ListaProdutos;
