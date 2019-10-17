import React from "react";
import { graphql, Link } from "gatsby";
import Helmet from "react-helmet";

export default ({ data }) => {
  const { edges: technologies } = data.allTechnologies;
  const { frontmatter: page, html } = data.allTechnologiesPage;
  const [headerHtml] = html.split("<hr>");
  const headerText = headerHtml.replace(/<[^>]*>/g, "");
  return (
    <div>
      <Helmet>
        <title>{page.title} - App Masters</title>
      </Helmet>
      <h3>{headerText}</h3>
      {technologies.map(({ node: technology }) => {
        const { logo, title, summary, bgColor } = technology.frontmatter;
        const image = logo.childImageSharp.fluid;
        return (
          <Link
            to={
              page.language === "en"
                ? `/en/technologies/${technology.fields.slug}`
                : `/pt/tecnologias/${technology.fields.slug}`
            }
          >
            <div>
              <div style={{ background: bgColor, height: 100, width: 100 }}>
                <img
                  srcSet={image.srcSet}
                  sizes={image.sizes}
                  alt={title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain"
                  }}
                />
              </div>
              <h3>{title}</h3>
              <div>{summary}</div>
            </div>
          </Link>
        );
      })}
    </div>
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
