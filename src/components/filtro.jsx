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
`;

class Filtros extends React.Component {
  render() {
    return (
      <EstiloContainer>
        <div>
          <EstiloFiltro>
            <div>
              <h2>Filtros:</h2>
              <label>R$ 0,00
                <input
                  type="range"
                  min="0"
                  max="199000"
                  value={this.props.minimo}
                  onChange={this.props.onChangeMinimo}
                ></input>
              R$ 200.000,00</label>
            </div>
            <div>
              <label>Buscar Produto: </label>
              <input
                value={this.props.buscaProduto}
                onChange={this.props.onChangeBusca}
              ></input>
            </div>
          </EstiloFiltro>
        </div>
      </EstiloContainer>
    );
  }
}

export default Filtros;