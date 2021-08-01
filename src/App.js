import React from "react";
import styled from "styled-components";
import Home from "./components/home";
import Filter from "./components/filter";
import Carrinho from "./components/carrinho";
import Header from "./components/header";
import Footer from "./components/footer";

const Conteudo = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr 1fr;
  background-color: black;
  color: white;
 `

function App() {
  return (
    <div className="App">

      <Header
        title={"De volta para o Futuro"}
        links={["Comprar", "Sobre", "Contato"]}
      />
      
      <Conteudo>
        <Filter />
        <Home />
        <Carrinho />
      </Conteudo>

      <Footer/>

    </div>
  );
}

export default App;
