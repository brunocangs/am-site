import React from "react";
import { graphql } from "gatsby";

export default ({ data }) => {
  console.log(data);
  const {} = data;
  return <div>Hi</div>;
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
  }

  query TechnologyPageQuery($language: String!, $id: String!) {
    markdownRemark(
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
