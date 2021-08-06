import React from "react";
import styled from "styled-components";

const StiloFooter = styled.div`
  background-color: black;
  color: white;
  display: flex;
  padding: 10px;
  align-items: center;
  justify-content: center;
`;

function Footer(props) {
  return (
    <div className="footer">
      <StiloFooter className="social-midias">
        <h2>{props.texto}</h2>
      </StiloFooter>
    </div>
  );
}

export default Footer;
