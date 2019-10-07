import React from "react";
import { graphql } from "gatsby";
import Helmet from "react-helmet";
import {
  Content,
  BannerContainer,
  BannerContent,
  Manifest,
  Projects
} from "../components/LandingComponents";
import MdIt from "markdown-it";
const md = new MdIt();

export default props => {
  const { landing, allProjects, allTechnologies } = props.data;
  const {
    banner: {
      childImageSharp: { fluid: image }
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
  console.log({ projects, technologies, landing });
  return (
    <>
      <Helmet>
        <title>{props.data.landing.frontmatter.title}</title>
      </Helmet>
      <Content>
        <BannerContainer aspectRatio={image.aspectRatio}>
          <img srcSet={image.srcSet} sizes={image.sizes} alt="Tech banner" />
          <BannerContent>
            <h2>{header}</h2>
            {content}
          </BannerContent>
        </BannerContainer>
        <div dangerouslySetInnerHTML={{ __html: md.render(ourWork) }}></div>
        <Manifest
          dangerouslySetInnerHTML={{
            __html: `<h2>${manifest.title}</h2>${md.render(manifest.content)}`
          }}
        />
        {language === "en" && (
          <Projects>
            <h2>Projects</h2>
            {projects.map(({ node: project }) => {
              return <div>project</div>;
            })}
          </Projects>
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
        ...SiteImageFluid
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
      avatar {
        ...SiteImageFluid
      }
      clientName
      testimony
      tags
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
