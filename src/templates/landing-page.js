import React from "react";
import { graphql, Link } from "gatsby";
import Helmet from "react-helmet";
import Img from "gatsby-image";
import ClampLines from "react-clamp-lines";
// import { Parallax } from "react-parallax";
import MdIt from "markdown-it";

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
  OurWork,
  ManifestItem
} from "../components/LandingComponents";
import { Button } from "../components/BlogComponents";

const md = new MdIt({ html: true });

export default props => {
  const {
    landing,
    allProjects,
    // allTechnologies,
    allTestimonies,
    ourWorkImage
  } = props.data;
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
  // const { edges: technologies } = allTechnologies;
  const { edges: testimonies } = allTestimonies;

  const renderTestimony = ({ node: testimony }, i) => {
    const { frontmatter } = testimony;
    const { avatar, testimony: body, title } = frontmatter;
    const image = avatar.childImageSharp.fluid;
    return (
      <div key={i}>
        <img src={image.src} alt={title} />
        <h3>{title}</h3>
        <ClampLines buttons={false} text={body} lines={2} innerElement="p" />
      </div>
    );
  };
  return (
    <>
      <Content>
        <BannerContainer>
          <img src="/img/banner_bg.png" alt="Person interacting with a phone" />
          <BannerContent>
            <div>
              <h1>{header}</h1>
              <p>{content}</p>
              <div>
                <Link to="/pt/alguma-pagina">
                  <Button variant="secondary">Texto?</Button>
                </Link>
                <Link to="/pt/alguma-pagina">
                  <Button variant="tertiary">Outro texto?</Button>
                </Link>
              </div>
            </div>
            <img src={`/img/${image.originalName}`} alt={"Banner"} />
          </BannerContent>
        </BannerContainer>
        <OurWork>
          <div dangerouslySetInnerHTML={{ __html: md.render(ourWork) }} />
          <div>
            <Img fluid={ourWorkImage.childImageSharp.fluid} />
          </div>
        </OurWork>
        {language === "en" ? (
          <>
            <Projects>
              <div>
                <h2>Our projects</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aliquid deleniti rem qui, fugiat sunt nisi.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
                  minus commodi hic eum. Voluptate ab tenetur saepe voluptates
                  reprehenderit amet eius laborum excepturi officiis pariatur
                  quas molestiae, ullam incidunt accusantium.
                </p>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Repudiandae doloremque consectetur, omnis aperiam suscipit
                  voluptate totam unde aut!
                </p>
              </div>
              <ul>
                {projects.map(({ node: project }, i) => {
                  const {
                    title,
                    summary,
                    thumbnailImage
                  } = project.frontmatter;
                  const { fluid } = thumbnailImage.childImageSharp;
                  return (
                    <Link to={`/en/projects/${project.fields.slug}`} key={i}>
                      <li>
                        <Img fluid={fluid} />
                        <div>
                          <h2>{title}</h2>
                          <ClampLines
                            buttons={false}
                            text={summary}
                            lines={2}
                            innerElement="p"
                          />
                        </div>
                      </li>
                    </Link>
                  );
                })}
              </ul>
            </Projects>
            <Manifest>
              <h2>{manifest.title}</h2>
              <ul>
                {manifest.content.map((content, i) => (
                  <ManifestItem key={i} content={content} md={md} />
                ))}
              </ul>
            </Manifest>
            <Testimonies>
              <ul>
                <li>{testimonies.slice(0, 1).map(renderTestimony)}</li>
                <li>{testimonies.slice(1, 3).map(renderTestimony)}</li>
              </ul>
              <div>
                <h2>Testimonies</h2>
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
            <HireUs
              dangerouslySetInnerHTML={{
                __html: `<h2>Hire Us!</h2>${md.render(hireUs)}`
              }}
            />
            <WeAreHiring>
              <div
                dangerouslySetInnerHTML={{ __html: md.render(weAreHiring) }}
              />
              <a
                href={"https://programador.emjuizdefora.com/"}
                target={"blank"}
                rel="noopener noreferrer"
              >
                <Button>Register now</Button>
              </a>
            </WeAreHiring>
          </>
        ) : (
          <>
            <Manifest>
              <h2>{manifest.title}</h2>
              <ul>
                {manifest.content.map((content, i) => (
                  <ManifestItem key={i} content={content} md={md} />
                ))}
              </ul>
            </Manifest>
            <HireUs style={{ marginTop: 64 }}>
              <div
                dangerouslySetInnerHTML={{
                  __html: md.render(weAreHiring)
                }}
              />
              <div>
                <a
                  href={"https://programador.emjuizdefora.com/"}
                  target={"blank"}
                  rel="noopener noreferrer"
                >
                  <Button variant={"secondary"}>Cadastrar agora</Button>
                </a>
                <Link to="/pt/blog/o-post-de-contratar-gentes">
                  <Button variant={"tertiary"}>Saber mais</Button>
                </Link>
              </div>
            </HireUs>
            <HowMuchIsMyApp>
              <div dangerouslySetInnerHTML={{ __html: md.render(hireUs) }} />
              <a
                href="https://quantocustaumapp.appmasters.io/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button>Fazer uma simulação</Button>
              </a>
            </HowMuchIsMyApp>
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
        content {
          content
          title
          image {
            ...SiteImageFixed
            childImageSharp {
              fixed {
                aspectRatio
              }
            }
          }
        }
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
    ourWorkImage: file(relativePath: { eq: "about_img_1.png" }) {
      ...SiteImageFluid
    }
  }
`;
