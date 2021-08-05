import React from "react";
import styled from "styled-components";

const ListaMenu = styled.div`
  display: flex;
  list-style: none;
`

const SpaceLi = styled.li`
  color: black;
  font-size: 1.2em;
  text-transform: uppercase;
  margin: 5px;
  
`

function Menu(props) {
  return (
    <ListaMenu>
      {props.links.map((link) => {
        return <SpaceLi>{link}</SpaceLi>;
      })}
    </ListaMenu>
  );
}

export default Menu;
