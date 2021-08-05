import React from "react";
import styled from "styled-components";

const Item = styled.ul`
  li {
    display: flex;
    flex-direction: column;
    background: #fff;
    border-radius: 10px;
    padding: 20px;

    img {
      align-self: center;
      width: 250px;
      height: 250px;
      border-radius: 10px;
    }

    > strong {
      font-size: 16px;
      line-height: 20px;
      color: #333;
      margin-top: 5px;
    }

    > span {
      font-size: 21px;
      font-weight: bold;
      margin: 5px 0 20px;
      color: #333;
    }

    button {
      background: #191920;
      color: #fff;
      border: 0;
      border-radius: 4px;
      overflow: hidden;
      margin-top: auto;

      display: flex;
      align-items: center;
      transition: background 0.2s;

      &:hover {
        background: black;
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
            <div>
              <div size={16} color="#FFF" />
            </div>
            <span>COMPRAR</span>
          </button>
        </li>
      </Item>
    );
  }
}
export default ListaProdutos;
