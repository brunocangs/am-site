import React from "react";
import { graphql } from "gatsby";
import Helmet from "react-helmet";
import { Content, TechnologyWrapper } from "../components/TechnologyComponents";
import { Banner } from "../components/Header";

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
          <img
            srcSet={image.fixed.srcSet}
            sizes={image.fixed.sizes}
            alt={title}
          />
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
    <>
      <Helmet>
        <title>{page.title} - App Masters</title>
      </Helmet>
      <div style={{ width: "100%" }}>
        <Banner title={headerText} />
        <Content>
          <div>{technologies.map(renderTechnologyItem)}</div>
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
