import React from "react";
import { graphql, Link } from "gatsby";
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
    // tags,
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
        <Link to={isEn ? `/en/projects/${slug}/` : `/pt/projetos/${slug}/`}>
          <Img fluid={{ ...fluid, aspectRatio: 1 }} />
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
          <Link
            to={isEn ? `/en/projects/${slug}/` : `/pt/projetos/${slug}/`}
            itemProp="url"
          >
            <h2 itemProp="name">{title}</h2>
          </Link>
          <ClampLines
            buttons={false}
            text={summary}
            lines={3}
            innerElement="p"
          />
          {/* <div>
            {tags.map((tag, i) => {
              return (
                <Link
                  to={`/${language}/tags/${kebabCase(tag)}/`}
                  key={i}
                  style={{ display: "block" }}
                >
                  {tag}
                </Link>
              );
            })}
          </div> */}
        </div>
      </ProjectItemDetails>
    </li>
  );
};
export default ({ data, pageContext }) => {
  const { allProjects, allProjectsPage } = data;
  const { edges: projects } = allProjects;
  const { frontmatter: page, html } = allProjectsPage;
  const [title] = html.split("<hr>");
  const isEn = pageContext.language === "en";
  const [mainProjects, sideProjects] = projects.reduce(
    (prev, curr) => {
      if (
        curr.node &&
        curr.node.frontmatter.type &&
        curr.node.frontmatter.type === "main"
      ) {
        prev[0].push(curr);
      } else {
        prev[1].push(curr);
      }
      return prev;
    },
    [[], []]
  );
  return (
    <div style={{ width: "100%" }}>
      <Banner title={title.replace(/<[^>]*>/g, "")} />
      <AllProjectsContainer>
        <Helmet>
          <title>{page.title}</title>
          <meta
            name="description"
            content={
              isEn
                ? `Index of the projects we've worked on, either for clients or internally for learning and tooling.`
                : `Índice de todos os projetos desenvolvidos pela empresa, seja para clientes ou para aprendizado e criação de ferramentas internas.`
            }
          />
          <link
            rel="canonical"
            href={`https://appmasters.io/${pageContext.language}/${
              isEn ? "projects" : "projetos"
            }/`}
          />
        </Helmet>
        <h2>{isEn ? "Client projects" : "Projetos de clientes"}</h2>
        <span>
          {isEn
            ? "Some projects are under NDA so they cannot be listed."
            : "Alguns projetos não podem ser divulgados, os demais apresentamos aqui."}
        </span>
        <ProjectsList>{mainProjects.map(renderProjectItem)}</ProjectsList>
        <h2>{isEn ? "Internal projects" : "Projetos internos"}</h2>
        <span>
          {isEn
            ? "Projects developed with the intent of studying, training new employees or just for fun."
            : "Projetos que desenvolvemos para fins de estudos, validar alguma tecnologia ou apenas por diversão."}
        </span>
        <ProjectsList>{sideProjects.map(renderProjectItem)}</ProjectsList>
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
      sort: { fields: frontmatter___date, order: DESC }
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
