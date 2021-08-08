import React from "react";
import Filtros from "./components/filtro";
import Produtos from "./components/produtos";
import Carrinho from "./components/carrinho";
import styled from "styled-components";
import Lua from "./assets/lua.jpg";
import Mercurio from "./assets/mercurio.jpg";
import Venus from "./assets/venus.jpg";
import Marte from "./assets/marte.jpg";
import Jupiter from "./assets/jupiter.jpg";
import Saturno from "./assets/saturno.jpg";
import Urano from "./assets/urano.jpg";
import Netuno from "./assets/netuno.jpg";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";

const Conteudo = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 4fr 1.2fr;
  grid-template-rows: 8vh 84vh 2vh;
  max-height: 100vh;
  overflow: auto;
`;

const EstiloHeader = styled.div`
  background-color: black;
  color: white;
  display: flex;
  max-width: 100%;
  align-items: center;
  justify-content: center;
`

const EstiloFooter = styled.div`
  background-color: black;
  color: white;
  display: flex;
  max-width: 100%;
  align-items: center;
  justify-content: center;
  position: sticky;
`

const produtos = [
  {
    id: 1,
    nome: "Lua",
    preco: 80000,
    foto: Lua,
  },
  {
    id: 2,
    nome: "Mercúrio",
    preco: 100000,
    foto: Mercurio,
  },
  {
    id: 3,
    nome: "Vênus",
    preco: 120000,
    foto: Venus,
  },
  {
    id: 4,
    nome: "Marte",
    preco: 120000,
    foto: Marte,
  },
  {
    id: 5,
    nome: "Júpiter",
    preco: 150000,
    foto: Jupiter,
  },
  {
    id: 6,
    nome: "Saturno",
    preco: 180000,
    foto: Saturno,
  },
  {
    id: 7,
    nome: "Urano",
    preco: 190000,
    foto: Urano,
  },
  {
    id: 8,
    nome: "Netuno",
    preco: 200000,
    foto: Netuno,
  },
];

export default class App extends React.Component {
  state = {
    minimo: 0,
    maximo: 0,
    buscaProduto: "",
    produtosCarrinho: [],
  };

  componentDidMount() {
    const carrinhoSalvo = localStorage.getItem('carrinho')
    const carrinhoAtualizado = JSON.parse(carrinhoSalvo) 
    if(carrinhoAtualizado){
      this.setState({produtosCarrinho: carrinhoAtualizado})
    }
     
  }

  componentDidUpdate() {
    localStorage.setItem(
      "carrinho",
      JSON.stringify(this.state.produtosCarrinho)
    );
    console.log(this.state.produtosCarrinho);
  }

  onChangeMinimo = (e) => {
    this.setState({ minimo: e.target.value });
  };

  onChangeMaximo = (e) => {
    this.setState({ maximo: e.target.value });
  };

  onChangeBusca = (e) => {
    this.setState({ buscaProduto: e.target.value });
  };

  addProdutoCarrinho = (idProduto) => {
    const noCarrinho = this.state.produtosCarrinho.find(
      (produto) => idProduto === produto.id
    );

    if (noCarrinho) {
      const novoCarrinho = this.state.produtosCarrinho.map((produto) => {
        if (idProduto === produto.id) {
          return {
            ...produto,
            qntdCompra: produto.qntdCompra + 1,
          };
        }
        return produto;
      });
      this.setState({ produtosCarrinho: novoCarrinho });
    } else {
      const novoProduto = produtos.find((produto) => idProduto === produto.id);
      const novoCarrinho = [
        ...this.state.produtosCarrinho,
        { ...novoProduto, qntdCompra: 1 },
      ];
      this.setState({ produtosCarrinho: novoCarrinho });
    }
  };

  apagarProduto = (idProduto) => {
    
    const noCarrinho = this.state.produtosCarrinho.find(
      (produtos) => idProduto === produtos.id
    );

    if (noCarrinho) {
      const novoCarrinho = this.state.produtosCarrinho
        .map((produto) => {
          if (idProduto === produto.id) {
            return {
              ...produto,
              qntdCompra: produto.qntdCompra - 1,
            };
          }
          return produto;
        })
        .filter((produto) => produto.qntdCompra > 0);
      this.setState({ produtosCarrinho: novoCarrinho });
    }
  };

  render() {
    return (
      <>
        <EstiloHeader>
          <Header
            nome={"Mochileiro das Galáxias"}
            // links={["Comprar", "Contato", "Sobre"]}
          />
        <listaMenu />
        </EstiloHeader>
        <Conteudo>
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
            addProdutoAoCarrinho={this.addProdutoCarrinho}
          />
          <Carrinho
            carrinhoCompra={this.state.produtosCarrinho}
            apagarProduto={this.apagarProduto}
            multiplicaValor={this.multiplicaValor}
          />
        </Conteudo>
        <EstiloFooter>
        <Footer texto="Olá! Eu sou o FOOTER!" />
        </EstiloFooter>
      </>
    );
  }
}
