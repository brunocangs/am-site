import React from "react";
import { graphql } from "gatsby";
import Helmet from "react-helmet";
import { Content, TechnologyWrapper } from "../components/TechnologyComponents";
import { Banner } from "../components/Header";
import Img from "gatsby-image";

export const renderTechnologyItem = ({ node: technology }, i) => {
  const { logo, title, language } = technology.frontmatter;
  const image = logo.childImageSharp;
  return (
    <TechnologyWrapper
      key={i}
      to={
        language === "en"
          ? `/en/technologies/${technology.fields.slug}`
          : `/pt/tecnologias/${technology.fields.slug}`
      }
    >
      <div>
        <div>
          <Img {...image} alt={title} />
        </div>
        <h3>{title}</h3>
      </div>
    </TechnologyWrapper>
  );
};

export default ({ data, pageContext: { language } }) => {
  const { edges: technologies } = data.allTechnologies;
  const { frontmatter: page, html } = data.allTechnologiesPage;
  const [headerHtml] = html.split("<hr>");
  const headerText = headerHtml.replace(/<[^>]*>/g, "");
  const isEn = language === "en";
  return (
    <>
      <Helmet>
        <title>{page.title}</title>
        <meta
          name="description"
          content={
            isEn
              ? `Index of the technologies and libraries we're experienced with, and that can be used when developing a project.`
              : `Índice das tecnologias e bibliotecas que dominamos e podem ser utilizadas ao desenvolver um projeto.`
          }
        />
        <link
          rel="canonical"
          href={`https://appmasters.io/${language}/${
            isEn ? "technologies" : "tecnologias"
          }`}
        />
      </Helmet>
      <div style={{ width: "100%" }}>
        <Banner title={headerText} />
        <Content>
          <div style={{ margin: -10 }}>
            {technologies.map(renderTechnologyItem)}
          </div>
        </Content>
      </div>
    </>
  );
};

export const query = graphql`
  query AllTechnologiesPage($language: String!) {
    allTechnologies: allMarkdownRemark(
      filter: {
        frontmatter: {
          templateKey: { eq: "technology-page" }
          language: { eq: $language }
        }
      }
    ) {
      edges {
        node {
          ...TechnologyPage
        }
      }
    }
    allTechnologiesPage: markdownRemark(
      frontmatter: {
        templateKey: { eq: "all-technologies-page" }
        language: { eq: $language }
      }
    ) {
      ...TechnologyPage
    }
  }
`;
