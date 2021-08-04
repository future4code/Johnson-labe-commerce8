import React from "react";
import ListaProdutos from "./listaprodutos";

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
        <div>
          <label>
            <span>Ordenar por: </span>
            <select onChange={this.ordenarProdutos} value={this.state.ordenar}>
              <option value={"crescente"}>Crescente</option>
              <option value={"decrescente"}>Decrescente</option>
            </select>
            <p>Mostrando: {ordenaListaFiltrada.length} Produtos</p>
          </label>
        </div>
        <div>
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
        </div>
      </div>
    );
  }
}

export default Produtos;
