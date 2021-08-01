import React from "react";
import styled from "styled-components";
import CardViagem from "./cardViagem";
import Marte from "../img/marte.jpg";
import Jupiter from "../img/jupiter.jpg";
import Mercurio from "../img/mercurio.jpg";
import Venus from "../img/venus.jpg";
import Saturno from "../img/saturno.jpg";
import Urano from "../img/urano.jpg";
import Netuno from "../img/netuno.jpg";
import Lua from "../img/lua.jpg";



const GridCard = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 2fr);
  grid-template-rows: repeat(2, 2fr);
  width: 100%;
  align-items: center;
  justify-items: center;
  margin-top: 40px;
  margin-bottom: 40px;
`;

class Home extends React.Component {
  render() {
    return (
      <GridCard>
        <CardViagem viagem={Lua} texto={"Viagem para a Lua"} preco={10000000} alt={'Imagem da Lua'}/>
        <CardViagem viagem={Mercurio} texto={"Viagem para Mercúrio"} preco={654654654} alt={'Imagem de Mercúrio'}/>
        <CardViagem viagem={Venus} texto={"Viagem para Vênus"} preco={8974531} alt={'Imagem de Vênus'}/>
        <CardViagem viagem={Marte} texto={"Viagem para Marte"} preco={564654651} alt={'Imagem de Marte'}/>
        <CardViagem viagem={Jupiter} texto={"Viagem para Júpiter"} preco={8716354165} alt={'Imagem de Júpiter'}/>
        <CardViagem viagem={Saturno} texto={"Viagem para Saturno"} preco={6545131} alt={'Imagem de Saturno'}/>
        <CardViagem viagem={Urano} texto={"Viagem para Urano"} preco={564651321} alt={'Imagem de Urano'}/>
        <CardViagem viagem={Netuno} texto={"Viagem para Netuno"} preco={6545651} alt={'Imagem de Netuno'}/>
      </GridCard>
    );
  }
}

export default Home;
