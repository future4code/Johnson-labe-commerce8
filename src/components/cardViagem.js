import React from "react";
import styled from "styled-components";
// import marte from './img/marte2.jpg'

const CardShadow = styled.div`
  box-shadow: 5px 2px 15px black;
  border-radius: 10px;
  height: 404px;
  width: 400px;
`;

const BorderImg = styled.img`
  border-radius: 10px;
`;

const CardViagem = () => {
  return (
    <div className="">
      <CardShadow>
        <BorderImg src="https://picsum.photos/404/404?a=1" alt="" />
      </CardShadow>

      <div>
        <p>Produto</p>
        <p>R$ 100,00</p>
      </div>
    </div>
  );
};

export default CardViagem;
