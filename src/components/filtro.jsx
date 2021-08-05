import React from "react";
import styled from "styled-components";

const EstiloContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: white;
  color: black;
`;

const EstiloFiltro = styled.div`
  margin: 30px;
  align-items: center;
`;

class Filtros extends React.Component {
  render() {
    return (
      <div>
        <EstiloContainer>
          <div>
            <EstiloFiltro>
              <h2>Filtros</h2>
              <label>Valor Mínimo</label>
              <input
                type="range"
                min="0"
                max="50000"
                value={this.props.minimo}
                onChange={this.props.onChangeMinimo}
              ></input>
              {/* <label>Valor Máximo</label>
              <input
                type="range"
                min="649001"
                max="0"
                value={this.props.maximo}
                onChange={this.props.onChangeMaximo}
              ></input> */}
              <label>Buscar Produto</label>
              <input
                value={this.props.buscaProduto}
                onChange={this.props.onChangeBusca}
              ></input>
            </EstiloFiltro>
          </div>
        </EstiloContainer>
      </div>
    );
  }
}

export default Filtros;
