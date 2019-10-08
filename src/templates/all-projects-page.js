import React from "react";
import { graphql, Link } from "gatsby";
import { kebabCase } from "lodash";
import Helmet from "react-helmet";

export default ({ data }) => {
  const { allProjects, allProjectsPage } = data;
  const { edges: projects } = allProjects;
  const { frontmatter: page } = allProjectsPage;
  return (
    <div>
      <Helmet>
        <title>{page.title}</title>
      </Helmet>
      <h2>All projects</h2>
      <div>
        {projects.map(({ node: project }, i) => {
          const {
            title,
            summary,
            tags,
            clientName,
            clientLocation,
            image
          } = project.frontmatter;
          const { slug } = project.fields;
          const { srcSet, sizes } = image.childImageSharp.fluid;
          return (
            <div key={i}>
              <Link to={`/en/project/${slug}`}>
                <img srcSet={srcSet} sizes={sizes} style={{ width: 100 }} />
              </Link>
              <div>{title}</div>
              <div>{summary}</div>
              <div>
                {clientName} - {clientLocation}
              </div>
              <div>
                {tags.map((tag, i) => {
                  return (
                    <Link
                      to={`/tags/${kebabCase(tag)}`}
                      key={i}
                      style={{ display: "block" }}
                    >
                      {tag}
                    </Link>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const query = graphql`
  query AllProjectsPageQuery($language: String!) {
    allProjects: allMarkdownRemark(
      filter: {
        frontmatter: { baseUrl: { eq: "project" }, language: { eq: $language } }
      }
    ) {
      edges {
        node {
          ...ProjectPage
        }
      }
    }
    allProjectsPage: markdownRemark(
      frontmatter: { templateKey: { eq: "all-projects-page" } }
    ) {
      ...ProjectPage
    }
  }
`;
