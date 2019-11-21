import React from "react";
import { graphql } from "gatsby";
import Helmet from "react-helmet";
import { Service, Content } from "../components/ServicesComponents";
import Markdown from "markdown-it";
import Img from "gatsby-image";
import { renderTechnologyItem } from "./all-technologies-page";
import { Banner } from "../components/Header";

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
    <div style={{ width: "100%" }}>
      <Helmet title={title} defer={false}>
        <meta
          name="description"
          content={
            isEn
              ? "Interested on our company? Here are the services we can provide"
              : "Interessado na empresa? Estes são os serviçõs que oferecemos"
          }
        />
        <link
          rel="canonical"
          href={`https://appmasters.io/${language}/${
            isEn ? "services" : "servicos"
          }/`}
        />
      </Helmet>
      <Banner title={title} />
      <Content>
        {services.map((service, i) => {
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
        <h2>{isEn ? "The tech we use" : "O que nós dominamos"}</h2>
        <div>{technolgies.map(renderTechnologyItem)}</div>
      </Content>
    </div>
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
