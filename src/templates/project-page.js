import React from "react";
import Img from "../components/Image";
import { HTMLContent } from "../components/Content";
import { graphql } from "gatsby";

export const ProjectPageTemplate = props => {
  const { html, image, content } = props;
  const renderedContent = content ? content : <HTMLContent content={html} />;
  return (
    <div>
      <Img image={image} />
      {renderedContent}
    </div>
  );
};

export default ({ data }) => {
  const { frontmatter, ...restData } = data.markdownRemark;
  return (
    <ProjectPageTemplate
      image={data.markdownRemark.frontmatter.image}
      {...restData}
      {...frontmatter}
    />
  );
};

export const query = graphql`
  fragment SiteImageFluid on File {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
  fragment SiteImageFixed on File {
    childImageSharp {
      fixed {
        ...GatsbyImageSharpFixed
      }
    }
  }

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
        ...SiteImageFluid
      }
      tags
    }
    fields {
      slug
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
