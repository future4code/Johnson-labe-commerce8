import React from "react";
import Filtros from "./components/filtro";
import Produtos from "./components/produtos";
import styled from "styled-components";
import Jupiter from ""

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 20px;
`;

const produtos = [
  {
    id: 1,
    nome: "xxxx",
    preco: 18000,
    foto: "Jupiter",
  },
  {
    id: 2,
    nome: "xxxx",
    preco: 18000,
    foto: "sdfsd",
  },
  {
    id: 3,
    nome: "xxxx",
    preco: 18000,
    foto: "sdfsd",
  },
  {
    id: 4,
    nome: "xxxx",
    preco: 18000,
    foto: "sdfsd",
  },
  {
    id: 5,
    nome: "xxxx",
    preco: 18000,
    foto: "sdfsd",
  },
  {
    id: 6,
    nome: "xxxx",
    preco: 18000,
    foto: "sdfsd",
  },
  {
    id: 7,
    nome: "xxxx",
    preco: 18000,
    foto: "sdfsd",
  },
  {
    id: 8,
    nome: "xxxx",
    preco: 18000,
    foto: "sdfsd",
  },
];

export default class App extends React.Component {
  state = {
    minimo: 0,
    maximo: 0,
    buscaProduto: "",
    produtosCarrinho: [],
  };

  componentDidMount() {}

  componentDidUpdate() {}

  onChangeMinimo = (e) => {
    this.setState({ minimo: e.target.value });
  };

  onChangeMaximo = (e) => {
    this.setState({ maximo: e.target.value });
  };

  onChangeBusca = (e) => {
    this.setState({ buscaProduto: e.target.value });
  };

  apagarProduto = (idProduto) => {};

  adicionarProdutoCarrinho = (idProduto) => {};

  render() {
    return (
      <>
      <Card>
        <Filtros
          minimo={this.state.minimo}
          maximo={this.state.maximo}
          buscaProduto={this.state.buscaProduto}
          onChangeMinimo={this.onChangeMinimo}
          onChangeMaximo={this.onChangeMaximo}
          onChangeBusca={this.onChangeBusca}
        />
        <Produtos
          produtos={produtos}
          minimo={this.state.minimo}
          maximo={this.state.maximo}
          buscaProduto={this.state.buscaProduto}
          addProdutoAoCarrinho={this.addProdutoAoCarrinho}
        />
        <carCompras
          carrinhoCompra={this.state.produtosCarrinho}
          apagarProduto={this.apagarProduto}
          multiplicaValor={this.multiplicaValor}
        />
      </Card>  
      </>
    );
  }
}
