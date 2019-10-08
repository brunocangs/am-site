import React from "react";
import { graphql, Link } from "gatsby";
import Helmet from "react-helmet";
import { Parallax } from "react-parallax";
import MdIt from "markdown-it";

import {
  Content,
  BannerContainer,
  BannerContent,
  Manifest,
  Projects,
  Testimonies
} from "../components/LandingComponents";

const md = new MdIt();

export default props => {
  const { landing, allProjects, allTechnologies, allTestimonies } = props.data;
  const {
    banner: {
      childImageSharp: { fixed: image }
    },
    bannerContent: { content, header },
    manifest,
    ourWork,
    weAreHiring,
    hireUs,
    language
  } = landing.frontmatter;
  const { edges: projects } = allProjects;
  const { edges: technologies } = allTechnologies;
  const { edges: testimonies } = allTestimonies;
  console.log({ projects, technologies, testimonies, landing });
  return (
    <>
      <Helmet>
        <title>{props.data.landing.frontmatter.title}</title>
      </Helmet>
      <Content>
        <Parallax
          bgImage={
            image.srcSet
              .split("\n")
              .slice(-1)[0]
              .match(/(.*) /)[1]
          }
        >
          <BannerContent>
            <h3>{header}</h3>
            <p>{content}</p>
          </BannerContent>
        </Parallax>
        <div dangerouslySetInnerHTML={{ __html: md.render(ourWork) }} />
        <Manifest
          dangerouslySetInnerHTML={{
            __html: `<h2>${manifest.title}</h2>${md.render(manifest.content)}`
          }}
        />
        {language === "en" && (
          <>
            <Projects>
              <h2>Projects</h2>
              {projects.map(({ node: project }) => {
                const { title, summary, image } = project.frontmatter;
                const srcSet = image.childImageSharp.fluid.srcSet;
                return (
                  <Link to={`/en/project/${project.fields.slug}`}>
                    <div>
                      <img srcSet={srcSet} style={{ width: 150 }} />
                      <div>{title}</div>
                      <p>{summary}</p>
                    </div>
                  </Link>
                );
              })}
            </Projects>
            <Testimonies>
              <h2>What people are saying about us!</h2>
            </Testimonies>
          </>
        )}
      </Content>
    </>
  );
};

export const query = graphql`
  # Definição da landing page
  fragment LandingPage on MarkdownRemark {
    frontmatter {
      title
      banner {
        ...SiteImageFixed
      }
      bannerContent {
        content
        header
      }
      language
      ourWork
      weAreHiring
      hireUs
      manifest {
        content
        title
      }
    }
  }

  # Definição de um depoimento
  fragment Testimony on MarkdownRemark {
    frontmatter {
      title
      baseUrl
      language
      clientName
      testimony
      tags
      avatar {
        ...SiteImageFluid
      }
    }
  }

  # Detalhes da landing page
  query LandingPageQuery($language: String!) {
    landing: markdownRemark(
      frontmatter: {
        language: { eq: $language }
        templateKey: { eq: "landing-page" }
      }
    ) {
      ...LandingPage
    }

    # Todos os projetos
    allProjects: allMarkdownRemark(
      filter: {
        frontmatter: {
          templateKey: { eq: "project-page" }
          language: { eq: $language }
          featured: { eq: true }
        }
      }
    ) {
      edges {
        node {
          ...ProjectPage
        }
      }
    }

    # Todas tecnologias
    allTechnologies: allMarkdownRemark(
      filter: {
        frontmatter: {
          templateKey: { eq: "technology-page" }
          language: { eq: $language }
          featured: { eq: true }
        }
      }
    ) {
      edges {
        node {
          ...TechnologyPage
        }
      }
    }

    # Todos os depoimentos
    allTestimonies: allMarkdownRemark(
      filter: {
        frontmatter: {
          baseUrl: { eq: "testimony" }
          language: { eq: $language }
        }
      }
    ) {
      edges {
        node {
          ...Testimony
        }
      }
    }
  }
`;
