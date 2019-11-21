import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styled, { createGlobalStyle } from "styled-components";
import * as Colors from "../styles/colors";
import "../codeHighlight.css";
import Helmet from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

const Globals = createGlobalStyle`
    *, *::after, *::before {
        box-sizing: border-box;
        outline: none;
        font-family: 'Poppins', sans-serif;
    }
    body, html {
        margin: 0;
        padding: 0;
        background-color: #fafafa;
        color: ${Colors.lightBlack};
    }
    body {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
    }
    .clamp-lines__button {
      padding: 0;
      color: ${Colors.blue};
      border: 0px solid transparent;
      background: transparent;
      :hover {
        text-decoration: underline;
        cursor: pointer;
      }
    }
    #___gatsby, #gatsby-focus-wrapper {
        display: flex;
        flex-direction: column;
        flex: 1;
    }
    p, h1, h2, h3, h4, h5 {
      font-family: "Poppins", sans-serif;
    }
    a {
      text-decoration: none;
      color: inherit;
      &:hover {
        text-decoration: underline;
      }
    }
`;

const Main = styled.main`
  flex: 1;
  display: flex;
`;

export default props => {
  const {
    image: {
      childImageSharp: {
        fixed: { src: ogImage }
      }
    }
  } = useStaticQuery(graphql`
    query LayoutQuery {
      image: file(relativePath: { eq: "app-masters-om-image.png" }) {
        ...SiteImageFixed
      }
    }
  `);
  const { children } = props;
  let language = props.pageContext.language || props.path.split("/")[1];
  if (language.length > 2) language = "en";
  const isEn = language === "en";
  return (
    <>
      <Helmet
        defaultTitle={
          isEn
            ? "Mobile and web software development - App Masters"
            : "App Masters - Desenvolvimento de sistemas web e mobile em Juiz de Fora, MG"
        }
        titleTemplate={
          isEn
            ? "%s - App Masters - Brazil"
            : "%s - App Masters - Juiz de Fora/MG"
        }
      >
        <link
          href="https://fonts.googleapis.com/css?family=Poppins:300,400,600,700&display=swap"
          rel="stylesheet"
        />
        <meta
          name="twitter:title"
          content={
            isEn
              ? "Mobile and web software development - App Masters"
              : "App Masters - Desenvolvimento de sistemas web e mobile"
          }
        />
        <meta
          name="twitter:description"
          content={isEn ? "App Masters home page" : "Página da App Masters"}
        />
        <meta name="og:image" content={`https://appmasters.io${ogImage}`} />
        <meta
          name="twitter:image"
          content={`https://appmasters.io${ogImage}`}
        />
        <meta
          name="twitter:image:alt"
          content={
            isEn
              ? `Blue gradient background with App Masters logo in black`
              : "Gradiente azul de fundo com logo da App Masters em preto"
          }
        />

        <meta
          name="description"
          content={
            isEn
              ? "This is the website for the company App Masters located in Juiz de Fora, Minas Gerais, Brasil. App Masters is a tech startup specialized in mobile and web development"
              : "Empresa de desenvolvimento de aplicativos e sistemas web em Juiz de Fora. O melhor lugar para trabalhar com programação, aprender e divertir!"
          }
        ></meta>
        <meta name="theme-color" content={Colors.blue}></meta>
        <meta
          name="keywords"
          content={`programação, software, aprender, desenvolvimento web, desenvolvimento mobile, javascript, react, react native, tecnologia, trabalho`}
        />
        <meta name="twitter:card" content="summary" />
        <html lang={isEn ? "en" : "pt"} />
      </Helmet>
      <Globals />
      <header
        style={{ zIndex: 1, position: "sticky", top: 0, right: 0, left: 0 }}
      >
        <Header language={language} {...props} />
      </header>
      <Main>{children}</Main>
      <footer>
        <Footer language={language} {...props} />
      </footer>
    </>
  );
};
