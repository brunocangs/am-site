import React from "react";
import { graphql } from "gatsby";

export default () => <div>Hi</div>;

export const query = graphql`
  fragment TechnologyPage on MarkdownRemark {
    html
    frontmatter {
      templateKey
      baseUrl
      language
      title
      logo {
        ...SiteImageFluid
      }
      tags
    }
  }
`;
