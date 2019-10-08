import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";

export default ({ data }) => {
  return (
    <>
      <Helmet>
        <title>{data.page.frontmatter.title}</title>
      </Helmet>
      <div dangerouslySetInnerHTML={{ __html: data.page.html }} />
    </>
  );
};

export const query = graphql`
  fragment AboutPage on MarkdownRemark {
    html
    frontmatter {
      language
      title
    }
  }

  query AboutPageQuery($language: String!) {
    page: markdownRemark(
      frontmatter: {
        templateKey: { eq: "about-page" }
        language: { eq: $language }
      }
    ) {
      ...AboutPage
    }
  }
`;
