import React from "react";

class Carrinho extends React.Component {
  multiplicarValor = (qntd, valor) => {
    const carrinhoTotal = qntd * valor;
    console.log(carrinhoTotal);
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
        <div>
          <div>
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
                  >
                    <div size={20} />
                  </button>
                </td>
              </tr>
            </tbody>
          </div>
        </div>
      );
    });
    return (
      <div>
        {carrinho}
        <footer>
          <button type="button">Finalizar pedido</button>

          <div>
            <span>TOTAL</span>
            <strong>R${this.valorTotal()},00</strong>
          </div>
        </footer>
      </div>
    );
  }
}

export default Carrinho;
