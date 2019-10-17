import React from "react";
import { graphql } from "gatsby";

export default ({ data }) => <pre>{JSON.stringify(data, null, 2)}</pre>;

export const query = graphql`
  fragment BlogPost on MarkdownRemark {
    id
    html
    rawMarkdownBody
    fields {
      slug
    }
    frontmatter {
      templateKey
      title
      language
      baseUrl
      date
      author
      description
      featuredPost
      featuredImage {
        ...SiteImageFluid
      }
      tags
    }
    parent {
      ... on File {
        birthTime
      }
    }
  }
  query BlogPostQuery($id: String!, $language: String!) {
    post: markdownRemark(id: { eq: $id }) {
      ...BlogPost
    }
    allAuthors: allMarkdownRemark(
      filter: {
        frontmatter: { language: { eq: $language }, baseUrl: { eq: "author" } }
      }
    ) {
      edges {
        node {
          id
          html
          frontmatter {
            title
            image {
              ...SiteImageFluid
            }
          }
        }
      }
    }
  }
`;
