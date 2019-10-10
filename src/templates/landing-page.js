import React from "react";
import { graphql, Link } from "gatsby";
import Helmet from "react-helmet";
// import { Parallax } from "react-parallax";
import MdIt from "markdown-it";
import Img from "gatsby-image";

import {
  Content,
  BannerContainer,
  BannerContent,
  Manifest,
  Projects,
  Testimonies,
  HireUs,
  WeAreHiring,
  HowMuchIsMyApp,
  OurWork
} from "../components/LandingComponents";

const md = new MdIt();

export default props => {
  const { landing, allProjects, allTechnologies, allTestimonies } = props.data;
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
  const { edges: testimonies } = allTestimonies;
  return (
    <>
      <Helmet>
        <title>{props.data.landing.frontmatter.title}</title>
      </Helmet>
      <Content>
        <BannerContainer>
          <img src="/img/banner_bg.png" />
          <BannerContent>
            <div>
              <h1>{header}</h1>
              <p>{content}</p>
            </div>
            <img src={`/img/${image.originalName}`} />
          </BannerContent>
        </BannerContainer>
        {/* <OurWork>
          <div dangerouslySetInnerHTML={{ __html: md.render(ourWork) }} />
        </OurWork> */}
        {/* <Manifest
          dangerouslySetInnerHTML={{
            __html: `<h2>${manifest.title}</h2>${md.render(manifest.content)}`
          }}
        /> */}
        {language === "en" ? (
          <>
            {/* <Projects>
              <h2>Our projects</h2>
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
            </Projects> */}
            <Testimonies>
              <ul>
                <li>
                  {testimonies.slice(0, 1).map(({ node: testimony }, i) => {
                    const { frontmatter, html } = testimony;
                    const { avatar, testimony: body, title } = frontmatter;
                    const image = avatar.childImageSharp.fluid;
                    return (
                      <div key={i + Math.random().toString()}>
                        <img src={image.src} />
                        <h3>{title}</h3>
                        <p>
                          {body.length > 65 ? body.slice(0, 65) + "..." : body}
                        </p>
                      </div>
                    );
                  })}
                </li>
                <li>
                  {testimonies.slice(0, 1).map(({ node: testimony }, i) => {
                    const { frontmatter, html } = testimony;
                    const { avatar, testimony: body, title } = frontmatter;
                    const image = avatar.childImageSharp.fluid;
                    return (
                      <>
                        <div key={i + Math.random().toString()}>
                          <img src={image.src} />
                          <h3>{title}</h3>
                          <p>
                            {body.length > 65
                              ? body.slice(0, 65) + "..."
                              : body}
                          </p>
                        </div>
                        <div key={i + Math.random().toString()}>
                          <img src={image.src} />
                          <h3>{title}</h3>
                          <p>
                            {body.length > 65
                              ? body.slice(0, 65) + "..."
                              : body}
                          </p>
                        </div>
                      </>
                    );
                  })}
                </li>
              </ul>
              <div>
                <h1>Testimonies</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                  minima sapiente ratione. Culpa asperiores aliquam dolor,
                  veniam quas quod beatae, atque, iste earum eum porro cum quam
                  at nam labore.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                  minima sapiente ratione. Culpa asperiores aliquam dolor,
                  veniam quas quod beatae, atque, iste earum eum porro cum quam
                  at nam labore.
                </p>
              </div>
            </Testimonies>
            {/* <HireUs
              dangerouslySetInnerHTML={{
                __html: `<h2>Hire Us</h2>${md.render(hireUs)}`
              }}
            /> */}
          </>
        ) : (
          <>
            {/* <HowMuchIsMyApp>
            <h2>Quanto custa um aplicativo?</h2>
            <p>
              Gostaria de saber rapidamente o preço da sua ideia? Entre em
              contato com a gente ou faça um teste rápido
              <a
                href="https://quantocustaumapp.appmasters.io/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Fazer uma simulação
              </a>
            </p>
          </HowMuchIsMyApp> */}
          </>
        )}
        {/* <WeAreHiring
          dangerouslySetInnerHTML={{
            __html: md.render(weAreHiring)
          }}
        /> */}
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
