import React from "react";
import { graphql } from "gatsby";
import Helmet from "react-helmet";
import { TechnologyPageWrapper } from "../components/TechnologyComponents";
import Img from "gatsby-image";

export default props => {
  const { data } = props;
  const { html, frontmatter } = data.technology;
  const { title, logo } = frontmatter;
  const image = logo.childImageSharp;
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="keywords" content={frontmatter.tags.join(", ")}></meta>
      </Helmet>
      <TechnologyPageWrapper>
        <div>
          <div>
            <h1>{title}</h1>
            <Img {...image} />
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
      id
      title
      logo {
        childImageSharp {
          fixed(
            height: 70
            width: 70
            fit: CONTAIN
            background: "transparent"
          ) {
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
