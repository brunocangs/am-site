import React from "react";
import { graphql } from "gatsby";

export default () => <div>Hi</div>;

export const query = graphql`
  fragment BlogPost on MarkdownRemark {
    id
    html
    id
    frontmatter {
      title
      baseUrl
      language
      templateKey
      featuredpost
    }
    parent {
      ... on File {
        birthTime
      }
    }
  }
`;
