import React from "react";
import { graphql, Link } from "gatsby";
import Img from "gatsby-image";
import ClampLines from "react-clamp-lines";
// import { Parallax } from "react-parallax";
import MdIt from "markdown-it";
import Helmet from "react-helmet";

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
  ManifestItem,
  SectionContainer
} from "../components/LandingComponents";
import { Button } from "../components/BlogComponents";
import { BaseContainer } from "../components/ProjectComponents";
import * as Colors from "../styles/colors";

const md = new MdIt({ html: true });

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

export default props => {
  const {
    landing,
    allProjects,
    allTestimonies,
    ourWorkImage,
    bannerImage: { childImageSharp: banner },
    hireUsImage: { childImageSharp: hireUsImage }
  } = props.data;
  const {
    banner: { childImageSharp: image },
    bannerContent: { content, header },
    manifest,
    ourWork,
    weAreHiring,
    hireUs
  } = landing.frontmatter;
  const { edges: projects } = allProjects;
  const { edges: testimonies } = allTestimonies;
  const { language } = props.pageContext;
  const isEn = language === "en";
  return (
    <Content>
      <Helmet>
        <link rel="canonical" href={`https://appmasters.io/${language}/`} />
      </Helmet>
      <BannerContainer>
        <Img
          {...banner}
          style={{ backgroundColor: Colors.blue }}
          alt="Blue gradient background"
        />
        <BannerContent>
          <div>
            <h1>{header}</h1>
            <p>{content}</p>
            {/* <div>
                <Link to="/pt/alguma-pagina">
                  <Button variant="secondary">Texto?</Button>
                </Link>
                <Link to="/pt/alguma-pagina">
                  <Button variant="tertiary">Outro texto?</Button>
                </Link>
              </div> */}
          </div>
          <Img {...image} />
        </BannerContent>
      </BannerContainer>
      {!isEn ? (
        <>
          <OurWork>
            <div dangerouslySetInnerHTML={{ __html: md.render(ourWork) }} />
            <div>
              <Img fluid={ourWorkImage.childImageSharp.fluid} />
            </div>
          </OurWork>
          {isEn ? (
            <>
              <Projects>
                <div>
                  <h2>Our projects</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aliquid deleniti rem qui, fugiat sunt nisi.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolor minus commodi hic eum. Voluptate ab tenetur saepe
                    voluptates reprehenderit amet eius laborum excepturi
                    officiis pariatur quas molestiae, ullam incidunt
                    accusantium.
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
                      <Link to={`/en/projects/${project.fields.slug}/`} key={i}>
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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Fuga minima sapiente ratione. Culpa asperiores aliquam
                    dolor, veniam quas quod beatae, atque, iste earum eum porro
                    cum quam at nam labore.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Fuga minima sapiente ratione. Culpa asperiores aliquam
                    dolor, veniam quas quod beatae, atque, iste earum eum porro
                    cum quam at nam labore.
                  </p>
                </div>
              </Testimonies>
              <HireUs>
                <div
                  dangerouslySetInnerHTML={{
                    __html: `<h2>Hire Us!</h2>${md.render(hireUs)}`
                  }}
                />
              </HireUs>
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
                <picture>
                  <source
                    type="image/webp"
                    srcSet={hireUsImage.fluid.srcSetWebp}
                    sizes={hireUsImage.fluid.sizes}
                  />
                  <source
                    srcSet={hireUsImage.fluid.srcSet}
                    sizes={hireUsImage.fluid.sizes}
                  />
                  <img src={hireUsImage.fluid.src} />
                </picture>
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
                  <Link to="/pt/blog/estamos-contratando-sempre/">
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
        </>
      ) : (
        <BaseContainer style={{ paddingTop: 38 }}>
          <div>
            <h2>It's almost done</h2>
            <p>
              Our english page is still being built and should be up on December
              15th. Please come back soon!
            </p>
          </div>
        </BaseContainer>
      )}
    </Content>
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
            childImageSharp {
              fixed(
                height: 80
                width: 80
                fit: CONTAIN
                background: "transparent"
              ) {
                ...GatsbyImageSharpFixed_withWebp
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
    bannerImage: file(relativePath: { eq: "banner_bg.png" }) {
      ...SiteImageFluid
    }
    hireUsImage: file(relativePath: { eq: "cta_bg.png" }) {
      ...SiteImageFluid
    }
  }
`;
