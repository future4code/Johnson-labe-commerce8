import React from "react";
import styled from "styled-components";
import Home from "./components/home";
import Filter from "./components/filter";
import Carrinho from "./components/carrinho";
import Header from "./components/header";

const Conteudo = styled.div`
  display: flex;
  padding: 10px;
  align-items: center;
  justify-content: space-between;
`;


function App() {
  return (
    <div className="App">
      <Header
        name={"Devolta para o Futuro"}
        links={["Comprar", "Sobre", "Contato"]}
      ></Header>
      <Conteudo>
      <Filter />
      <Home />
      <Carrinho />
      </Conteudo>
    </div>
  );
}

export default App;
