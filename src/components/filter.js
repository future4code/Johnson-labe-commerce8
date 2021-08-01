import React from "react";
import styled from "styled-components";

const EstiloFiltro = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 99%;
  border: 1px solid black;
  background-color: lightyellow;
  color: black;
`

const EstiloInput = styled.input`
  padding: 3px;
  width: 120px;
  margin-top: 8px;
`

const EstiloDoP = styled.p`
  display: inline;
  margin-right: 10px;
`

const EstiloLabel = styled.label`
  align-self: flex-end;
  margin-right: 20px;
`

class Filter extends React.Component {
  render() {
    return (
      <EstiloFiltro>
        <h3>Filtro</h3>
        <EstiloLabel>
          <EstiloDoP>Valor mínimo:</EstiloDoP>
          <EstiloInput type="number" value="" />
        </EstiloLabel>
        <EstiloLabel>
          <EstiloDoP>Valor máximo:</EstiloDoP>
          <EstiloInput type="number" value="" />
        </EstiloLabel>
        <EstiloLabel>
          <EstiloDoP>Busca por nome:</EstiloDoP>
          <EstiloInput type="text" value="" />
        </EstiloLabel>
      </EstiloFiltro>
    );
  }
}

export default Filter;
