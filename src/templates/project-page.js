import React from "react";
import Img from "gatsby-image";

export default ({ data }) => {
  return (
    <div>
      <Img
        fluid={data.markdownRemark.frontmatter.image.childImageSharp.fluid}
      />
      <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}></div>
    </div>
  );
};

export const query = graphql`
  fragment ProjectPage on MarkdownRemark {
    html
    frontmatter {
      language
      title
      summary
      clientName
      clientLocation
      devTime
      devMonths
      image {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      tags
    }
  }

  query ProjectQuery($language: String!) {
    markdownRemark(
      frontmatter: {
        templateKey: { eq: "project-page" }
        language: { eq: $language }
      }
    ) {
      ...ProjectPage
    }
  }
`;
