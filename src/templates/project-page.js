import React from "react";
import Img from "gatsby-image";
import { graphql } from "gatsby";
import {
  Content,
  ProjectDetailsContainer
} from "../components/ProjectComponents";
import Helmet from "react-helmet";

const getStrings = isEn => {
  if (isEn)
    return {
      aboutDevelopment: "Development details",
      developmentMonths: "Months to deliver",
      developmentTime: "Hours of development",
      developmentCommits: "Commits pushed"
    };
  return {
    aboutDevelopment: "Informações do desenvolvimento",
    developmentMonths: "Meses até entregar",
    developmentTime: "Horas de desenvolvimento",
    developmentCommits: "Commits realizados"
  };
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
    devCommits,
    image,
    tags
  } = frontmatter;
  const [mainPitch, storeButtons, techDetail, financial] = restData.html.split(
    "<hr>"
  );
  const isEn = language === "en";
  const {
    aboutDevelopment,
    developmentMonths,
    developmentTime,
    developmentCommits
  } = getStrings(isEn);
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
            <ul>
              <li>
                <h3>{devTime}</h3>
                <span>{developmentTime}</span>
              </li>
              <li>
                <h3>{devMonths}</h3>
                <span>{developmentMonths}</span>
              </li>
              <li>
                <h3>{devCommits}</h3>
                <span>{developmentCommits}</span>
              </li>
            </ul>
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
      devCommits
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
