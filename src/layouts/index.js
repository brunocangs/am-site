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
        <style>
          {`
          .primary {
            box-sizing: border-box;
            outline: none;
            font-family: 'Poppins',sans-serif;
            width: fit-content;
            position: relative;
            font-weight: 400;
            color: #222;
            border-radius: 6px;
            cursor: pointer;
            border: 1px solid #222;
            background: transparent;
            z-index: 1;
            padding: 14px 40px;
            font-size: 1.2em;
            display: block;
          }
          .primary::after {
            content: " ";
            position: absolute;
            border-radius: 7px;
            top: -1px;
            right: -1px;
            bottom: -1px;
            left: -1px;
            background-image: linear-gradient( to left,transparent 0%,transparent 100% );
            z-index: -1;
          }
          .primary:hover {
            box-sizing: border-box;
            outline: none;
            font-family: 'Poppins',sans-serif;
            width: fit-content;
            position: relative;
            font-weight: 400;
            border-radius: 6px;
            cursor: pointer;
            z-index: 1;
            padding: 14px 40px;
            font-size: 1.2em;
            border: 1px solid transparent;
            color: white;
            background: transparent;
          }
          .primary:hover::after {
            background-image: linear-gradient( to left,#57ddff 0%,#00b4ff 100% );
          }
          .secondary {
            display: block;
            box-sizing: border-box;
            outline: none;
            font-family: 'Poppins',sans-serif;
            width: fit-content;
            position: relative;
            font-weight: 400;
            color: white;
            border-radius: 6px;
            cursor: pointer;
            border: 1px solid white;
            background: transparent;
            z-index: 1;
            padding: 14px 40px;
            font-size: 1.2em;
          }
          .secondary::after {
            content: " ";
            position: absolute;
            border-radius: 7px;
            top: -1px;
            right: -1px;
            bottom: -1px;
            left: -1px;
            background-image: linear-gradient( to left,transparent 0%,transparent 100% );
            z-index: -1;
          }
          .secondary:hover {
            box-sizing: border-box;
            outline: none;
            font-family: 'Poppins',sans-serif;
            width: fit-content;
            position: relative;
            font-weight: 400;
            border-radius: 6px;
            cursor: pointer;
            z-index: 1;
            padding: 14px 40px;
            font-size: 1.2em;
            border: 1px solid transparent;
            color: white;
            background: transparent;
          }
          .secondary:hover::after{
            background-image: linear-gradient( to left,#57ddff 0%,#57ddff 100% );
          }

          .tertiary {
            display: block;
            box-sizing: border-box;
            outline: none;
            font-family: 'Poppins',sans-serif;
            width: fit-content;
            position: relative;
            font-weight: 400;
            color: #0ab6ff;
            border-radius: 6px;
            cursor: pointer;
            border: 1px solid #0ab6ff;
            background: white;
            z-index: 1;
            padding: 14px 40px;
            font-size: 1.2em;
          }
          .tertiary::after {
            content: " ";
            position: absolute;
            border-radius: 7px;
            top: -1px;
            right: -1px;
            bottom: -1px;
            left: -1px;
            background-image: linear-gradient( to left,transparent 0%,transparent 100% );
            z-index: -1;
          }
          .tertiary:hover {
            box-sizing: border-box;
            outline: none;
            font-family: 'Poppins',sans-serif;
            width: fit-content;
            position: relative;
            font-weight: 400;
            border-radius: 6px;
            cursor: pointer;
            z-index: 1;
            padding: 14px 40px;
            font-size: 1.2em;
            border: 1px solid transparent;
            color: white;
            background: transparent;
          }
          .tertiary:hover::after {
            background-image: linear-gradient( to left,#57ddff 0%,#57ddff 100% );
          }
          `}
        </style>
        <script>
          {`
            (function(w,d,t,u,n,a,m){w['MauticTrackingObject']=n;
            w[n]=w[n]||function(){(w[n].q=w[n].q||[]).push(arguments)},a=d.createElement(t),
            m=d.getElementsByTagName(t)[0];a.async=1;a.src=u;m.parentNode.insertBefore(a,m)
        })(window,document,'script','https://mautic.appmasters.io/mtc.js','mt');

        mt('send', 'pageview');
          `}
        </script>
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
