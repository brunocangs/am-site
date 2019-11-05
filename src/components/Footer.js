import React from "react";
import styled from "styled-components";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

import { medium } from "../styles/screens";
import { lightestGrey, lightBlack, darkGrey, black } from "../styles/colors";
import { Link } from "gatsby";

const FooterContainer = styled.div`
  font-weight: 300;
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
  width: 100%;
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
  @media screen and (min-width: ${medium}) {
    width: 33%;
  }
`;

const SocialWrapper = styled.div`
  svg {
    font-size: 1.8em;
    margin-right: 6px;
  }
`;

export default props => {
  const { language } = props;
  const isEn = language === "en";
  return (
    <FooterContainer>
      <FooterContent>
        {isEn ? (
          <>
            <h3>Relevant links</h3>
            <Link to="/en/projects">Projects</Link>
            <Link to="/en/blog">Blog</Link>
            <Link to="/en/technologies">Technologies</Link>
            <Link to="/en/about">About us</Link>
            <Link to="/en/contact">Contact</Link>
            <a href={"https://academy.appmasters.io/"}>App Masters Academy</a>
          </>
        ) : (
          <>
            <h3>Links relevantes</h3>
            <Link to="/pt/projetos">Projetos</Link>
            <Link to="/pt/blog">Blog</Link>
            <Link to="/pt/tecnologias">Tecnologias</Link>
            <Link to="/pt/sobre">Sobre nós</Link>
            <Link to="/pt/contato">Fale conosco</Link>
            <a href={"https://academy.appmasters.io/"}>App Masters Academy</a>
          </>
        )}
      </FooterContent>
      <FooterContent>
        <h3>{isEn ? "Social networks" : "Redes sociais"}</h3>
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
        <h3>{isEn ? "Address" : "Endereço"}</h3>
        {isEn
          ? "Rio Branco Avenue 3480, 36025-020, Juiz de Fora, Minas Gerais, Brazil"
          : "Av. Barão do Rio Branco, 3480 - Passos, Juiz de Fora - MG, 36025-020 3º andar, Sala 1"}
        <a
          href="https://www.google.com.br/maps/place/App+Masters/@-21.7725999,-43.3486377,17z/data=!3m1!4b1!4m5!3m4!1s0x989b5d3104ae57:0x9216e0df6326e89f!8m2!3d-21.7725999!4d-43.3471735"
          target="_blank"
          rel="noopener noreferrer"
        >
          {isEn ? "Open in " : "Abrir no "} Google Maps
        </a>
      </FooterContent>
    </FooterContainer>
  );
};
