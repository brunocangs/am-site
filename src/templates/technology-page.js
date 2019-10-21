import React from "react";
import { graphql } from "gatsby";
import Helmet from "react-helmet";
import { TechnologyPageWrapper } from "../components/TechnologyComponents";
import Img from "gatsby-image";

export default props => {
  const { data } = props;
  const { html, frontmatter } = data.technology;
  const { title, logo } = frontmatter;
  const image = logo.childImageSharp.fixed;
  return (
    <>
      <Helmet>
        <title>{title} - App Masters</title>
      </Helmet>
      <TechnologyPageWrapper>
        <div>
          <div>
            <h1>{title.split(" |")[1]}</h1>
            <Img fixed={image} />
          </div>
        </div>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </TechnologyPageWrapper>
    </>
  );
};

export const query = graphql`
  fragment TechnologyPage on MarkdownRemark {
    id
    html
    frontmatter {
      templateKey
      baseUrl
      summary
      language
      bgColor
      title
      logo {
        ...SiteImageFluid
        childImageSharp {
          fixed(width: 80, height: 80) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      tags
    }
    fields {
      slug
    }
  }

  query TechnologyPageQuery($language: String!, $id: String!) {
    technology: markdownRemark(
      id: { eq: $id }
      frontmatter: {
        templateKey: { eq: "technology-page" }
        language: { eq: $language }
      }
    ) {
      ...TechnologyPage
    }
  }
`;
