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
    whereToFind,
    tags,
    summary
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
        <title>{title}</title>
        <meta name="keywords" content={tags.join(", ")}></meta>
        <meta name="description" content={summary} />
        <link
          rel="canonical"
          href={`https://appmasters.io/${language}/${
            isEn ? "projects" : "projetos"
          }/${restData.fields.slug}/`}
        />
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [{
              "@type": "ListItem",
              "position": 1,
              "name": "App Masters",
              "item": "https://appmasters.io/${language}/"
            },{
              "@type": "ListItem",
              "position": 2,
              "name": "${isEn ? "Projects" : "Projetos"}",
              "item": "https://appmasters.io/${language}/${
            isEn ? "projects" : "projetos"
          }/"
            },{
              "@type": "ListItem",
              "position": 3,
              "name": "${title}",
              "item": "https://appmasters.io/${language}/blog/${
            restData.fields.slug
          }/"
            }]
          }
          `}
        </script>
      </Helmet>
      <Content>
        <Img fluid={{ ...image.childImageSharp.fluid }} />
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
                      i.node.frontmatter.id
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
        ...GatsbyImageSharpFluid_withWebp
        originalName
      }
    }
  }
  fragment SiteImageFixed on File {
    childImageSharp {
      fixed {
        ...GatsbyImageSharpFixed_withWebp
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
          childImageSharp {
            fixed(width: 170) {
              ...GatsbyImageSharpFixed_withWebp
            }
          }
        }
      }
      image {
        ...SiteImageFluid
      }
      thumbnailImage {
        ...SiteImageFluid
      }
      type
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
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
  }
`;
