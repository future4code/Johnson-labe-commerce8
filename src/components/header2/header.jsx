import React from "react";
import styled from "styled-components";
import Menu from "./listaMenu";

const Cabecalho = styled.div`
  background-color: #00acea;
  display: flex;
  padding: 10px; 
  align-items: center;
  justify-content: space-between;
`;

export default function Header(props) {
  return (
    <div>
      <Cabecalho>
        <h1>{props.nome}s</h1>
        <Menu links={props.links}></Menu>
      </Cabecalho>
    </div>
  );
}