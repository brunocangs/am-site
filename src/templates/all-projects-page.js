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
import { IoIosPin } from "react-icons/io";
import ClampLines from "react-clamp-lines";
import { Banner } from "../components/Header";

export const renderProjectItem = ({ node: project }, i) => {
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
            <span>{clientName}</span>
          </div>
          <div>
            <IoIosPin />
            <span>{clientLocation}</span>
          </div>
        </div>
        <div>
          <Link to={isEn ? `/en/projects/${slug}` : `/pt/projetos/${slug}`}>
            <h2>{title}</h2>
          </Link>
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
                  to={`/${language}/tags/${kebabCase(tag)}`}
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
    <div style={{ width: "100%" }}>
      <Banner title={title.replace(/<[^>]*>/g, "")} />
      <AllProjectsContainer>
        <Helmet>
          <title>{page.title}</title>
        </Helmet>
        <ProjectsList>{projects.map(renderProjectItem)}</ProjectsList>
      </AllProjectsContainer>
    </div>
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
      sort: { fields: frontmatter___date }
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
