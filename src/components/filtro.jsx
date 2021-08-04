import React from "react";

class Filtros extends React.Component {
  render() {
    return (
      <div>
        <div>
          <h2>Filtros</h2>
          <label>Valor Mínimo</label>
          <input
            type="range"
            min="0"
            max="649001"
            value={this.props.minimo}
            onChange={this.props.onChangeMinimo}
          ></input>
          <label>Valor Máximo</label>
          <input
            type="range"
            min="0"
            max="649001"
            value={this.props.maximo}
            onChange={this.props.onChangeMaximo}
          ></input>
          <label>Buscar Produto</label>
          <input
            value={this.props.buscaProduto}
            onChange={this.props.onChangeBusca}
          ></input>
        </div>
      </div>
    );
  }
}

export default Filtros;
