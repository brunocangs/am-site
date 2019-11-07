import React from "react";
import Img from "gatsby-image";
import { graphql } from "gatsby";
import {
  Content,
  ProjectDetailsContainer
} from "../components/ProjectComponents";
import Helmet from "react-helmet";
import { renderTechnologyItem } from "./all-technologies-page";

const getStrings = isEn => {
  if (isEn)
    return {
      aboutDevelopment: "Development details",
      developmentMonths: "Months to deliver",
      developmentTime: "Hours of work",
      developmentCommits: "Commits pushed",
      usedTech: "Technologies used"
    };
  return {
    aboutDevelopment: "Informações do desenvolvimento",
    developmentMonths: "Meses até a entrega",
    developmentTime: "Horas de trabalho",
    developmentCommits: "Commits realizados",
    usedTech: "Tecnologias utilizadas"
  };
};

export default ({ data }) => {
  const { frontmatter, ...restData } = data.markdownRemark;
  const {
    language,
    title,
    devTime,
    devMonths,
    devCommits,
    image,
    whereToFind
  } = frontmatter;
  const [mainPitch, techDetail, financial] = restData.html.split("<hr>");
  const isEn = language === "en";
  const {
    aboutDevelopment,
    developmentMonths,
    developmentTime,
    developmentCommits,
    usedTech
  } = getStrings(isEn);
  const { edges: technologies } = data.allTechnologies;
  return (
    <>
      <Helmet>
        <title>{title} - App Masters</title>
      </Helmet>
      <Content>
        <Img fluid={{ ...image.childImageSharp.fluid, aspectRatio: 2.5 }} />
        <ProjectDetailsContainer>
          <h1>{title}</h1>
          <div dangerouslySetInnerHTML={{ __html: mainPitch }} />
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
            {whereToFind && (
              <div>
                {whereToFind.map((item, i) => (
                  <a
                    key={i}
                    href={item.link}
                    target={"__blank"}
                    rel="noopener noreferrer"
                  >
                    <Img fixed={item.image.childImageSharp.fixed} />
                  </a>
                ))}
              </div>
            )}
          </div>
          <div dangerouslySetInnerHTML={{ __html: techDetail }} />
          <div>
            <h2>{usedTech}</h2>
            <ul>
              {technologies
                .filter(i => {
                  return (
                    data.markdownRemark.frontmatter.technology.indexOf(
                      i.node.frontmatter.title
                    ) > -1
                  );
                })
                .map(renderTechnologyItem)}
            </ul>
          </div>
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
        ...GatsbyImageSharpFluid_noBase64
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
      whereToFind {
        link
        image {
          ...SiteImageFixed
        }
      }
      image {
        ...SiteImageFluid
      }
      thumbnailImage {
        ...SiteImageFluid
      }
      technology
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
    allTechnologies: allMarkdownRemark(
      filter: {
        frontmatter: {
          templateKey: { eq: "technology-page" }
          language: { eq: $language }
        }
      }
    ) {
      edges {
        node {
          ...TechnologyPage
          frontmatter {
            logo {
              childImageSharp {
                smallLogo: fluid(maxWidth: 85) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`;
