import React from "react";
import { EstiloCarrinho, Container, ProductTable, Total } from "./styled";

class Carrinho extends React.Component {
  multiplicarValor = (qntd, valor) => {
    const carrinhoTotal = qntd * valor;

    return carrinhoTotal;
  };

  valorTotal = () => {
    const carrinho = this.props.carrinhoCompra;
    let valorTotal = 0;

    for (let produto of carrinho) {
      valorTotal += produto.preco * produto.qntdCompra;
    }
    return valorTotal;
  };
  render() {
    const carrinho = this.props.carrinhoCompra.map((cart, index) => {
      return (
        <Container>
          <ProductTable>
            <thead>
              <tr>
                <th>PRODUTO</th>
                <th>QTD</th>
                <th>SUBTOTAL</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <strong>{cart.nome}</strong>
                  <img src={cart.foto} alt={cart.nome} />
                </td>
                <td>
                  <div>
                    <input type="text" readOnly value={cart.qntdCompra} />
                  </div>
                </td>
                <td>
                  <strong>
                    R${this.multiplicarValor(cart.qntdCompra, cart.preco)}
                  </strong>
                </td>
                <td>
                  <button
                    type="button"
                    onClick={() => this.props.apagarProduto(cart.id)}
                  >X</button>
                </td>
              </tr>
            </tbody>
          </ProductTable>
        </Container>
      );
    });
    return (
      <Container>
        <div>
          {carrinho}
          <footer>
            <button type="button">Finalizar pedido</button>

            <Total>
              <span>TOTAL: </span>
              <strong>R${this.valorTotal()},00</strong>
            </Total>
          </footer>
        </div>
      </Container>
    );
  }
}

export default Carrinho;
