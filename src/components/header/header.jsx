import React from "react";

export default function Header(props) {
  return (
    <div className="header">
      <h1>{props.nome}</h1>
      {/* <Menu links={props.links}></Menu> */}
    </div>
  );
}