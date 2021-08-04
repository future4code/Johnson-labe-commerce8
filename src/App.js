import React from "react";
import Filtros from "./components/filtro";
import Produtos from "./components/produtos";

// const Conteudo = styled.div`
//   display: grid;
//   grid-template-columns: 1fr 4fr 1fr;
//   background-color: black;
//   color: white;

// `;

const produtos = [
  {
    id: 1,
    nome: "xxxx",
    preco: 18000,
    foto: "Jupiter",
  },
  {
    id: 1,
    nome: "xxxx",
    preco: 18000,
    foto: "sdfsd",
  },
  {
    id: 1,
    nome: "xxxx",
    preco: 18000,
    foto: "sdfsd",
  },
  {
    id: 1,
    nome: "xxxx",
    preco: 18000,
    foto: "sdfsd",
  },
  {
    id: 1,
    nome: "xxxx",
    preco: 18000,
    foto: "sdfsd",
  },
  {
    id: 1,
    nome: "xxxx",
    preco: 18000,
    foto: "sdfsd",
  },
  {
    id: 1,
    nome: "xxxx",
    preco: 18000,
    foto: "sdfsd",
  },
  {
    id: 1,
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
      </>
    );
  }
}
