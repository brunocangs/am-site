import React from "react";
import { graphql, Link } from "gatsby";
import Helmet from "react-helmet";

export default ({ data }) => {
  const { edges: technologies } = data.allTechnologies;
  const { frontmatter: page, html } = data.allTechnologiesPage;
  const [headerHtml, ...rest] = html.split("<hr>");
  const header = document.createElement("div");
  header.innerHTML = headerHtml;
  return (
    <div>
      <Helmet>
        <title>{page.title}</title>
      </Helmet>
      <h3>{header.innerText}</h3>
      {technologies.map(({ node: technology }) => {
        const { logo, title, summary } = technology.frontmatter;
        const image = logo.childImageSharp.fluid;
        return (
          <Link
            to={
              page.language === "en"
                ? `/en/technology/${technology.fields.slug}`
                : `/pt/tecnologia/${technology.fields.slug}`
            }
          >
            <div>
              <img
                srcSet={image.srcSet}
                sizes={image.sizes}
                style={{ width: 100 }}
              />
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
