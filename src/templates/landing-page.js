import React from "react";
import { graphql } from "gatsby";
import Helmet from "react-helmet";

export default props => {
  const { landing, allProjects, allTechnologies } = props.data;
  const { edges: projects } = allProjects;
  const { edges: technologies } = allTechnologies;
  return (
    <div>
      <Helmet>
        <title>{landing.frontmatter.title}</title>
      </Helmet>
      {JSON.stringify(props.data, null, "-")
        .split("\n")
        .map(i => (
          <>
            {i}
            <br />
          </>
        ))}
      Landing Page bruv
    </div>
  );
};

export const query = graphql`
  fragment LandingPage on MarkdownRemark {
    frontmatter {
      title
    }
  }

  fragment Testimony on MarkdownRemark {
    frontmatter {
      title
      avatar
      clientName
      testimony
      tags
    }
  }

  query LandingPageQuery($language: String!) {
    landing: markdownRemark(
      frontmatter: {
        language: { eq: $language }
        templateKey: { eq: "landing-page" }
      }
    ) {
      ...LandingPage
    }
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
        }
      }
    }
  }
`;
