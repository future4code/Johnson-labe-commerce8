import React from "react";
import styled from "styled-components";

const EstiloFiltro = styled.div`
display: flex;
flex-direction: column;
margin: 10px 20px 10px 20px;
border: 1px solid black;
`

class Filter extends React.Component {
  render() {
    return (
    <EstiloFiltro>
        <h3>Filtro</h3>
        <label>
          Valor mínimo:
          <input type="number" value=""/>
        </label>
        <label>
          Valor máximo:
          <input type="number" value=""/>
        </label>
        <label>
          Busca por nome:
          <input type="text" value=""/>
        </label>
      </EstiloFiltro>
    );
  }
}

export default Filter;
