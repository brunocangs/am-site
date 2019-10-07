import React from "react";
import styled from "styled-components";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

import { medium } from "../styles/screens";
import { lightestGrey, lightBlack, darkGrey, black } from "../styles/colors";

const FooterContainer = styled.div`
  background-color: ${lightestGrey};
  color: ${lightBlack};
  padding: 18px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  @media screen and (min-width: ${medium}) {
    max-height: 300px;
    flex-direction: row;
  }
`;

const FooterContent = styled.div`
  flex: 1;
  width: 25%;
  padding: 8px;
  text-align: center;
  color: ${darkGrey};
  h3 {
    font-size: 16px;
    color: ${black};
    text-transform: uppercase;
    font-weight: 400;
    margin-top: 4px;
  }
  > a {
    display: block;
    margin-top: 6px;
  }
`;

const SocialWrapper = styled.div`
  svg {
    font-size: 1.8em;
    margin-right: 6px;
  }
`;

export default props => (
  <FooterContainer>
    <FooterContent>
      <h3>Endereço</h3>
      Av. Barão do Rio Branco, 3480 - Passos, Juiz de Fora - MG, 36025-020 3º
      andar, Sala 1
      <a
        href="https://www.google.com.br/maps/place/App+Masters/@-21.7725999,-43.3486377,17z/data=!3m1!4b1!4m5!3m4!1s0x989b5d3104ae57:0x9216e0df6326e89f!8m2!3d-21.7725999!4d-43.3471735"
        target="_blank"
        rel="noopener noreferrer"
      >
        Abrir no Google Maps
      </a>
    </FooterContent>
    <FooterContent>
      <h3>Links relevantes</h3>
      <a href="/">Projetos</a>
      <a href="/">Blog</a>
      <a href="/">Sobre nós</a>
      <a href="/">Fale conosco</a>
    </FooterContent>
    <FooterContent>
      <h3>Redes sociais</h3>
      <SocialWrapper>
        <a
          href="https://www.facebook.com/appmasters.io/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook />
        </a>
        <a
          href="https://www.instagram.com/appmasters.io/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.linkedin.com/company/appmasters.io/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
      </SocialWrapper>
    </FooterContent>
    <FooterContent>
      <h3>Alguma coisa a mais</h3>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam natus enim
        excepturi, eligendi est ut ratione cum incidunt aperiam recusandae sequi
        fugiat reiciendis error, eaque corporis quasi ab consequatur fuga.
      </p>
    </FooterContent>
  </FooterContainer>
);
