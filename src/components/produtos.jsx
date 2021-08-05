import React from "react";
import ListaProdutos from "./listaProdutos";
import styled from "styled-components";

const GridCard = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 2fr);
  width: 100%;
  align-items: center;
  justify-items: center;
`;

const Ordem = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 30px;
`

class Produtos extends React.Component {
  state = {
    ordenar: "decrescente",
  };

  ordenarProdutos = (event) => {
    this.setState({ ordenar: event.target.value });
  };

  ordenarListaFiltrada = () => {
    return this.props.produtos
      .filter((produto) =>
        this.props.maximo ? produto.preco < this.props.maximo : true
      )
      .filter((produto) =>
        this.props.minimo ? produto.preco > this.props.minimo : true
      )
      .filter((produto) =>
        this.props.buscaProduto
          ? produto.nome.includes(this.props.buscaProduto)
          : true
      )
      .sort((a, b) =>
        this.state.ordenar === "crescente"
          ? a.preco - b.preco
          : b.preco - a.preco
      );
  };

  render() {
    const ordenaListaFiltrada = this.ordenarListaFiltrada();
    return (
      <div>
        <Ordem>
        <div>
          <h1>Viagens espaciais com preços especiais!</h1>
        </div>
          <label>
            <span>Ordenar por: </span>
            <select onChange={this.ordenarProdutos} value={this.state.ordenar}>
              <option value={"crescente"}>Crescente</option>
              <option value={"decrescente"}>Decrescente</option>
            </select>
            <p>Mostrando: {ordenaListaFiltrada.length} Produtos</p>
          </label>
        </Ordem>
        <div>
          <GridCard>
            {ordenaListaFiltrada.map((produto) => {
              return (
                <ListaProdutos
                  produto={produto}
                  addProdutoAoCarrinho={() =>
                    this.props.addProdutoAoCarrinho(produto.id)
                  }
                />
              );
            })}
          </GridCard>
        </div>
      </div>
    );
  }
}

export default Produtos;
