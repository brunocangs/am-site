import React from "react";
import { graphql } from "gatsby";
import Helmet from "react-helmet";

export default ({ data }) => {
  const { html, frontmatter } = data.technology;
  const { title, logo, summary } = frontmatter;
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <div style={{ padding: 12 }}>
        <h2>Hi</h2>
        <p>{summary}</p>
        <div dangerouslySetInnerHTML={{ __html: html }} />
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
