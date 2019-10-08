import React from "react";
import { graphql } from "gatsby";

const getStrings = language => {
  let strings = {};
  if (language === "en") {
    strings = {
      blogs: "Blogs with tag ",
      projects: "Projects with tag ",
      technologies: "Technologies with tag "
    };
  } else {
    strings = {
      blogs: "Blogs com a tag ",
      projects: "Projects com a tag ",
      technologies: "Technologies com a tag "
    };
  }
  return strings;
};

export default ({ data, pageContext }) => {
  const { edges: blogs } = data.allBlogs;
  const { edges: projects } = data.allProjects;
  const { edges: technologies } = data.allTechnologies;
  const strings = getStrings(pageContext.language);
  return (
    <div style={{ padding: 12 }}>
      {blogs.length > 0 && (
        <div>
          <h2>
            {strings.blogs}
            {pageContext.tag} ({blogs.length}):
          </h2>
          <div>
            {blogs.map(({ node: blog }) => {
              return (
                <>
                  <h3>{blog.frontmatter.title}</h3>
                </>
              );
            })}
          </div>
        </div>
      )}
      {projects.length > 0 && (
        <div>
          <h2>
            {strings.projects}
            {pageContext.tag} ({projects.length}):
          </h2>
          {projects.map(({ node: project }) => {
            return (
              <>
                <h3>{project.frontmatter.title}</h3>
              </>
            );
          })}
        </div>
      )}
      {technologies.length > 0 && (
        <div>
          <h2>
            {strings.technologies}
            {pageContext.tag} ({technologies.length}):
          </h2>
          {technologies.map(({ node: technology }) => {
            return (
              <>
                <h3>{technology.frontmatter.title}</h3>
              </>
            );
          })}
        </div>
      )}
    </div>
  );
};

export const query = graphql`
  query TagPageQuery($tag: String!, $language: String!) {
    allProjects: allMarkdownRemark(
      filter: {
        frontmatter: {
          tags: { eq: $tag }
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
    allTechnologies: allMarkdownRemark(
      filter: {
        frontmatter: {
          tags: { eq: $tag }
          templateKey: { eq: "technology-page" }
          language: { eq: $language }
        }
      }
    ) {
      edges {
        node {
          ...TechnologyPage
        }
      }
    }
    allBlogs: allMarkdownRemark(
      filter: {
        frontmatter: {
          tags: { eq: $tag }
          templateKey: { eq: "blog-post" }
          language: { eq: $language }
        }
      }
    ) {
      edges {
        node {
          ...TechnologyPage
        }
      }
    }
  }
`;
