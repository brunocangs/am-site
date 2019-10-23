import React from "react";
import { graphql } from "gatsby";
import Helmet from "react-helmet";
import { Service, Content } from "../components/ServicesComponents";
import Markdown from "markdown-it";
import Img from "gatsby-image";
import { renderTechnologyItem } from "./all-technologies-page";

const md = Markdown();

export default ({
  data: { service, allTechnologies },
  pageContext: { language }
}) => {
  const { frontmatter } = service;
  const { title, services } = frontmatter;
  const { edges: technolgies } = allTechnologies;
  const isEn = language === "en";
  return (
    <>
      <Helmet title={title} defer={false} />
      <Content>
        <h1>{isEn ? "Our services" : "Nossos serviços"}</h1>
        {new Array(5).fill(services.slice(0, 1)[0]).map((service, i) => {
          const image = service.image.childImageSharp.fluid;
          return (
            <Service key={i} image={image}>
              <div>
                <h2>{service.title}</h2>
                <div
                  dangerouslySetInnerHTML={{
                    __html: md.render(service.description)
                  }}
                />
                <div></div>
              </div>
              <Img fluid={image} />
            </Service>
          );
        })}
        <h1>{isEn ? "The tech we use" : "As tecnologias que usamos"}</h1>
        <div>{technolgies.map(renderTechnologyItem)}</div>
      </Content>
    </>
  );
};

export const query = graphql`
  query ServicesPage($language: String!) {
    service: markdownRemark(
      frontmatter: {
        templateKey: { eq: "all-services-page" }
        language: { eq: $language }
      }
    ) {
      frontmatter {
        title
        services {
          image {
            ...SiteImageFluid
          }
          title
          tags
          description
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
