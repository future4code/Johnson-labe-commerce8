import React from "react";
import styled from "styled-components";
// import marte from './img/marte2.jpg'

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 20px;
`;

const CardShadow = styled.div`
  box-shadow: 2px 2px 15px white;
  border-radius: 10px;
  height: 250px;
  width: 250px;
`;

const BorderImg = styled.img`
  border-radius: 10px;
  max-height: auto;
  max-width: auto;
`;

const adicionarItem = (props) => {
  //adicionar alteração do estado
  console.log("clicou");
};

const CardViagem = (props) => {
  return (
    <div className="">
      <div>
        <Card>
          <CardShadow>
            <BorderImg src="https://picsum.photos/250/250?a=1" alt="" />
          </CardShadow>

          <div>
            <p>Viagem</p>
            <p>R$ 100,00</p>
            <button onClick={adicionarItem}>Adicionar ao carrinho</button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default CardViagem;
