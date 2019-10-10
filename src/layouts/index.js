import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styled, { createGlobalStyle } from "styled-components";
import * as Colors from "../styles/colors";
import "../codeHighlight.css";
import Helmet from "react-helmet";

const Globals = createGlobalStyle`
    *, *::after, *::before {
        box-sizing: border-box;
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
    #___gatsby, #gatsby-focus-wrapper {
        display: flex;
        flex-direction: column;
        flex: 1;
    }
    a {
      color: ${Colors.grey};
      text-decoration: none;
      &:hover {
        color: ${Colors.darkGrey};
        text-decoration: underline;
      }
    }
    h1, h2, h3, h4, h5 {
      font-family: "Poppins", sans-serif;
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
  return (
    <>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans:800|Poppins:300,400,500,600,700,800|Roboto:300,400,500"
          rel="stylesheet"
        />
      </Helmet>
      <Globals />
      <header style={{ zIndex: 1 }}>
        <Header language={language} {...props} />
      </header>
      <Main>{children}</Main>
      <footer>
        <Footer language={language} {...props} />
      </footer>
    </>
  );
};
