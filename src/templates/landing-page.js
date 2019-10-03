import React from "react";
import { graphql } from "gatsby";
import Helmet from "react-helmet";

export default props => {
  console.log(props);
  return (
    <div>
      <Helmet>
        <title>{props.data.markdownRemark.frontmatter.title}</title>
      </Helmet>
      Landing Page bruv
    </div>
  );
};

export const query = graphql`
  fragment LandingPage on MarkdownRemarkFrontmatter {
    title
  }
  query LandingPageQuery($language: String!) {
    markdownRemark(
      frontmatter: {
        language: { eq: $language }
        templateKey: { eq: "landing-page" }
      }
    ) {
      id
      frontmatter {
        ...LandingPage
      }
    }
  }
`;
