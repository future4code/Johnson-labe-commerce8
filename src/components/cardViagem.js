import React from "react";
import styled from "styled-components";

const Card = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding-bottom: 20px;
`

const CardShadow = styled.div`
  box-shadow: 2px 2px 15px white;
  border-radius: 10px;
  height: 280px;
  width: 280px;
`;

const BorderImg = styled.img`
  border-radius: 10px;
  width: 280px;
  height: 280px;
`;

const CardViagem = (props) => {
  return (
    <div>
      <Card>
        <CardShadow>
          <BorderImg src={props.viagem} alt="" />
        </CardShadow>
        
        <div>
          <p>{props.texto}</p>
          <p>{props.preco}</p>
          <button>Adicionar ao carrinho</button>
        </div>
      </Card>
    </div>  
  );
};

export default CardViagem;
