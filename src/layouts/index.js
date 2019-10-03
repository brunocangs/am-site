import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styled, { createGlobalStyle } from "styled-components";

const Globals = createGlobalStyle`
    *, *::after, *::before {
        box-sizing: border-box;
        font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
    }
    body, html {
        margin: 0;
        padding: 0;
        background-color: #fafafa;
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
`;

const Main = styled.main`
  flex: 1;
  display: flex;
  padding: 12px;
`;

export default ({ children }) => {
  return (
    <>
      <Globals />
      <header>
        <Header />
      </header>
      <Main>{children}</Main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};
