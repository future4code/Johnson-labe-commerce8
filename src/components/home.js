import React from "react";
import styled from "styled-components";
import CardViagem from "./cardViagem";

const GridCard = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 2fr);
  grid-template-rows: repeat(3, 2fr);
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
        <CardViagem />
        <CardViagem />
        <CardViagem />
        <CardViagem />
        <CardViagem />
        <CardViagem />
        <CardViagem />
        <CardViagem />
        <CardViagem />
        <CardViagem />
        <CardViagem />
        <CardViagem />
      </GridCard>
    );
  }
}

export default Home;
