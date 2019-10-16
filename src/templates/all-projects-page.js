import React from "react";
import { graphql, Link } from "gatsby";
import { kebabCase } from "lodash";
import Helmet from "react-helmet";
import {
  AllProjectsContainer,
  ProjectsList,
  ProjectItemDetails
} from "../components/ProjectComponents";
import Img from "gatsby-image";
import { FaMapPin } from "react-icons/fa";
import ClampLines from "react-clamp-lines";

const renderProjectItem = ({ node: project }, i) => {
  const {
    title,
    summary,
    tags,
    clientName,
    clientLocation,
    thumbnailImage,
    language
  } = project.frontmatter;
  const { slug } = project.fields;
  const { fluid } = thumbnailImage.childImageSharp;
  const isEn = language === "en";
  return (
    <li key={i}>
      <div>
        <Link to={isEn ? `/en/projects/${slug}` : `/pt/projetos/${slug}`}>
          <Img fluid={fluid} />
        </Link>
      </div>
      <ProjectItemDetails>
        <div>
          <div>
            <span>Client{isEn ? "" : "e"}</span>
            <FaMapPin />
          </div>
          <div>
            <span>{clientName}</span>
            <span>{clientLocation}</span>
          </div>
        </div>
        <div>
          <h2>{title}</h2>
          <ClampLines
            buttons={false}
            text={summary}
            lines={3}
            innerElement="p"
          />
          <div>
            {tags.map((tag, i) => {
              return (
                <Link
                  to={`/en/tags/${kebabCase(tag)}`}
                  key={i}
                  style={{ display: "block" }}
                >
                  {tag}
                </Link>
              );
            })}
          </div>
        </div>
      </ProjectItemDetails>
    </li>
  );
};
export default ({ data }) => {
  const { allProjects, allProjectsPage } = data;
  const { edges: projects } = allProjects;
  const { frontmatter: page, html } = allProjectsPage;
  const [title] = html.split("<hr>");
  return (
    <AllProjectsContainer>
      <Helmet>
        <title>{page.title}</title>
      </Helmet>
      <div dangerouslySetInnerHTML={{ __html: title }} />

      <ProjectsList>
        {new Array(6).fill(projects.slice(0, 1)[0]).map(renderProjectItem)}
      </ProjectsList>
    </AllProjectsContainer>
  );
};

export const query = graphql`
  query AllProjectsPageQuery($language: String!) {
    allProjects: allMarkdownRemark(
      filter: {
        frontmatter: {
          templateKey: { eq: "project-page" }
          language: { eq: $language }
        }
      }
    ) {
      edges {
        node {
          ...ProjectPage
        }
      }
    }
    allProjectsPage: markdownRemark(
      frontmatter: {
        templateKey: { eq: "all-projects-page" }
        language: { eq: $language }
      }
    ) {
      ...ProjectPage
    }
  }
`;
