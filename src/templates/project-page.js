import React from "react";
import Img from "gatsby-image";
import { graphql } from "gatsby";
import {
  Content,
  ProjectDetailsContainer
} from "../components/ProjectComponents";
import Helmet from "react-helmet";
const getStrings = isEn => {
  if (isEn) return { aboutDevelopment: "Development details" };
  return { aboutDevelopment: "Informações do desenvolvimento" };
};
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
  const [mainPitch, storeButtons, techDetail, financial] = restData.html.split(
    "<hr>"
  );
  const isEn = language === "en";
  const { aboutDevelopment } = getStrings(isEn);
  return (
    <>
      <Helmet>
        <title>{title} - App Masters</title>
      </Helmet>
      <Content>
        <Img fluid={image.childImageSharp.fluid} />
        <ProjectDetailsContainer>
          <div dangerouslySetInnerHTML={{ __html: mainPitch }} />
          <div dangerouslySetInnerHTML={{ __html: storeButtons }} />
          <div>
            <h2>{aboutDevelopment}</h2>
          </div>
          <div dangerouslySetInnerHTML={{ __html: techDetail }} />
          <div dangerouslySetInnerHTML={{ __html: financial }} />
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
