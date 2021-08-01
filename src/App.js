import React from "react";
import styled from "styled-components";
import Home from "./components/home";
import Filter from "./components/filter";
import Carrinho from "./components/carrinho";
import Header from "./components/header";
import Footer from "./components/footer";

const Conteudo = styled.div`
  display: grid;
  
  padding: 10px;  
  align-items: center;
  justify-content: space-between;
  background-color: lightgray;

 `

function App() {
  return (
    <div className="App">
      <Header
        tiltle={"De volta para o Futuro"}
        links={["Comprar", "Sobre", "Contato"]}
      ></Header>
      <Conteudo>
        <Filter />
        <Carrinho />
        <Home />
      </Conteudo>
      <Footer/>
    </div>
  );
}

export default App;
