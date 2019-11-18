import React from "react";
import Header, { Banner } from "../components/Header";
import Footer from "../components/Footer";
import styled, { createGlobalStyle } from "styled-components";
import * as Colors from "../styles/colors";
import "../codeHighlight.css";
import Helmet from "react-helmet";
import { BaseContainer } from "../components/ProjectComponents";

const Globals = createGlobalStyle`
    *, *::after, *::before {
        box-sizing: border-box;
        outline: none;
        font-family: 'Roboto', sans-serif;
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
    h1, h2, h3, h4, h5 {
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
  const { children } = props;
  let language = props.path.split("/")[1];
  if (language.length > 2) language = "en";
  const isEn = language === "en";
  return (
    <>
      <Helmet
        defaultTitle="App Masters - Juiz de Fora/MG"
        titleTemplate="%s - App Masters - Juiz de Fora/MG"
      >
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans:800|Poppins:300,400,500,600,700,800|Roboto:300,400,500"
          rel="stylesheet"
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
        <html lang={isEn ? "en-US" : "pt-BR"} />
      </Helmet>
      <Globals />
      <header
        style={{ zIndex: 1, position: "sticky", top: 0, right: 0, left: 0 }}
      >
        <Header language={language} {...props} />
      </header>
      <Main>
        {isEn ? (
          <div style={{ width: "100%" }}>
            <Banner title={`Not available`} />
            <BaseContainer
              style={{ flexDirection: "column", padding: "80px 0" }}
            >
              <h2>Sorry for the inconvenience</h2>
              <p>
                Our english page is still being built and should be up in a few
                days.
                <br />
                Please come back soon!
              </p>
            </BaseContainer>
          </div>
        ) : (
          children
        )}
      </Main>
      <footer>
        <Footer language={language} {...props} />
      </footer>
    </>
  );
};
