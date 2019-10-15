import React from "react";
import Img from "gatsby-image";
import { graphql } from "gatsby";
import {
  Content,
  ProjectDetailsContainer
} from "../components/ProjectComponents";
import Helmet from "react-helmet";

export default ({ data }) => {
  const { frontmatter, ...restData } = data.markdownRemark;
  const {
    language,
    title,
    summary,
    clientName,
    clientLocation,
    devTime,
    devMonths,
    image,
    thumbnailImage,
    tags
  } = frontmatter;
  return (
    <>
      <Helmet>
        <title>{title} - App Masters</title>
      </Helmet>
      <Content>
        <Img fluid={image.childImageSharp.fluid} />
        <ProjectDetailsContainer>
          <div dangerouslySetInnerHTML={{ __html: restData.html }} />
          <div></div>
        </ProjectDetailsContainer>
      </Content>
    </>
  );
};

export const query = graphql`
  fragment SiteImageFluid on File {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
        originalName
      }
    }
  }
  fragment SiteImageFixed on File {
    childImageSharp {
      fixed {
        ...GatsbyImageSharpFixed
        originalName
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
      thumbnailImage {
        ...SiteImageFluid
      }
      tags
    }
    fields {
      slug
    }
  }

  query ProjectQuery($language: String!, $id: String!) {
    markdownRemark(
      id: { eq: $id }
      frontmatter: {
        templateKey: { eq: "project-page" }
        language: { eq: $language }
      }
    ) {
      ...ProjectPage
    }
  }
`;
