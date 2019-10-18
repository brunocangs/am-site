import React from "react";
import { graphql } from "gatsby";
import Helmet from "react-helmet";
import { Content, TechnologyWrapper } from "../components/TechnologyComponents";

export const renderTechnologyItem = ({ node: technology }) => {
  const { logo, title, summary, bgColor, language } = technology.frontmatter;
  const image = logo.childImageSharp;
  return (
    <TechnologyWrapper
      to={
        language === "en"
          ? `/en/technologies/${technology.fields.slug}`
          : `/pt/tecnologias/${technology.fields.slug}`
      }
    >
      <div>
        <div>
          <img srcSet={image.fixed.srcSet} sizes={image.fixed.sizes} />
        </div>
        <h3>{title.split("| ")[1]}</h3>
      </div>
    </TechnologyWrapper>
  );
};

export default ({ data }) => {
  const { edges: technologies } = data.allTechnologies;
  const { frontmatter: page, html } = data.allTechnologiesPage;
  const [headerHtml] = html.split("<hr>");
  const headerText = headerHtml.replace(/<[^>]*>/g, "");
  return (
    <Content>
      <Helmet>
        <title>{page.title} - App Masters</title>
      </Helmet>
      <h1>{headerText}</h1>
      <div>{technologies.map(renderTechnologyItem)}</div>
    </Content>
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
          frontmatter {
            logo {
              childImageSharp {
                fixed(width: 80, height: 80) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
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
