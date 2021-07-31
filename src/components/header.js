import React from "react";
import styled from "styled-components";

const Cabecalho = styled.div`
  background-color: darkgray;
  display: flex;
  padding: 10px;
  align-items: center;
  justify-content: space-between;
`;

const ListaMenu = styled.div`
 display: flex;
 list-style: none;

`
const SpaceLi = styled.li`
    margin: 5px;
`

function Header(props) {
  return (
    
      <Cabecalho className="header">
        <h1>{props.name}</h1>
        <ListaMenu className="menu">
          <SpaceLi>{props.links[0]}</SpaceLi>
          <SpaceLi>{props.links[1]}</SpaceLi>
          <SpaceLi>{props.links[2]}</SpaceLi>
        </ListaMenu>
      </Cabecalho>
    
  );
}

export default Header;
