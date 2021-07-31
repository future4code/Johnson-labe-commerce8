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


const FontTitle =styled.h1`
  font-size: 2.2em;
`


function Header(props) {
  return (
    <Cabecalho className="header">
      <FontTitle>{props.tiltle}</FontTitle>
      <Menu links={props.links}></Menu>
    </Cabecalho>
  );
}

export default Header;
