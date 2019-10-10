import React from "react";
import { graphql } from "gatsby";
import Helmet from "react-helmet";

export default ({ data }) => {
  const { html, frontmatter } = data.technology;
  const { title, logo, summary } = frontmatter;
  const image = logo.childImageSharp.fluid;
  console.log(image);
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <div>
        <div
          style={{
            backgroundColor: frontmatter.bgColor,
            height: 100
          }}
        >
          <img src={image.src} style={{ height: 100, width: 100 }} />
        </div>
        <div style={{ padding: 12 }}>
          <h2>Hi</h2>
          <p>{summary}</p>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </div>
      </div>
    </>
  );
};

export const query = graphql`
  fragment TechnologyPage on MarkdownRemark {
    html
    frontmatter {
      templateKey
      baseUrl
      summary
      language
      bgColor
      title
      logo {
        ...SiteImageFluid
      }
      tags
    }
    fields {
      slug
    }
  }

  query TechnologyPageQuery($language: String!, $id: String!) {
    technology: markdownRemark(
      id: { eq: $id }
      frontmatter: {
        templateKey: { eq: "project-page" }
        language: { eq: $language }
      }
    ) {
      ...TechnologyPage
    }
  }
`;
