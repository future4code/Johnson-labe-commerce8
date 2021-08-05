import React from "react";
import styled from "styled-components";

const EstiloFiltro = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 99%;
  height: 100%;
  border: 1px solid black;
  background-color: lightyellow;
  color: black;
`;

class Filtros extends React.Component {
  render() {
    return (
      <div>
        <EstiloFiltro>
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
        </EstiloFiltro>
      </div>
    );
  }
}

export default Filtros;
