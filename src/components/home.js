import React from "react";
import styled from "styled-components";
import CardViagem from "./cardViagem";

const GridCard = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 15px;
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
      </GridCard>
    );
  }
}

export default Home;
