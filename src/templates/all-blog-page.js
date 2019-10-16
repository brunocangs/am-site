import React from "react";
import { graphql } from "gatsby";

const ComponentName = ({ data }) => <pre>{JSON.stringify(data, null, 4)}</pre>;

export const query = graphql`
  {
    allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
      sort: { order: ASC, fields: frontmatter___date }
    ) {
      edges {
        node {
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
      }
    }
  }
`;

export default ComponentName;
