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
  :last-child {
    line-height: 1.5em;
  }
  span {
    margin: 18px 0;
    display: block;
    font-size: 16px;
    color: ${black};
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
            <span>Relevant links</span>
            <Link to="/en/projects">Projects</Link>
            <Link to="/en/blog">Blog</Link>
            <Link to="/en/technologies">Technologies</Link>
            <Link to="/en/about">About us</Link>
            <Link to="/en/contact">Contact</Link>
            <a href={"https://academy.appmasters.io/"}>App Masters Academy</a>
          </>
        ) : (
          <>
            <span>Links relevantes</span>
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
        <span>{isEn ? "Social networks" : "Redes sociais"}</span>
        <SocialWrapper>
          <a
            href="https://www.facebook.com/appmasters.io/"
            target="_blank"
            rel="noopener noreferrer external nofollow"
            title="Facebook"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.instagram.com/appmasters.io/"
            target="_blank"
            rel="noopener noreferrer external nofollow"
            title="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com/company/appmasters.io/"
            target="_blank"
            rel="noopener noreferrer external nofollow"
            title="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </SocialWrapper>
      </FooterContent>
      <FooterContent>
        <span>{isEn ? "Address" : "Endereço"}</span>
        {isEn ? (
          "Rio Branco Avenue 3480, 36025-020, Juiz de Fora, Minas Gerais, Brazil"
        ) : (
          <>
            Av. Barão do Rio Branco 3480
            <br />
            3º andar, Sala 1<br />
            Bairro Bom Passos, Juiz de Fora - MG
            <br />
            CEP 36025-020
          </>
        )}
        <a
          href="https://www.google.com.br/maps/place/App+Masters/@-21.7725999,-43.3486377,17z/data=!3m1!4b1!4m5!3m4!1s0x989b5d3104ae57:0x9216e0df6326e89f!8m2!3d-21.7725999!4d-43.3471735"
          target="_blank"
          rel="noopener noreferrer external nofollow"
        >
          {isEn ? "Open in " : "Abrir no "} Google Maps
        </a>
      </FooterContent>
    </FooterContainer>
  );
};
