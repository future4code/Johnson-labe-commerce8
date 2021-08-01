import React from "react";
import styled from "styled-components";

const StiloFooter = styled.div`
  background-color: #00acea;  
  display: flex;
  padding: 10px;
  align-items: center;
  justify-content: center;
`;



function Footer(props) {
  return (
    <div className="footer">
      <StiloFooter className="social-midias">
        <h2>Olá obrigado por escolher a De volta para o futuro !!! </h2>
      </StiloFooter>
    </div>
  );
}

export default Footer;
