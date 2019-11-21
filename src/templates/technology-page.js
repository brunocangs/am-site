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
  const isEn = props.pageContext.language === "en";
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="keywords" content={frontmatter.tags.join(", ")}></meta>
        <meta
          name="description"
          content={
            isEn
              ? `Technical information and details on how we use ${title}`
              : `Informações técnicas e detalhes de como utilizamos ${title}`
          }
        />
        <link
          rel="canonical"
          href={`https://appmasters.io/${props.pageContext.language}/${props.data.technology.fields.slug}/`}
        />
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
            ...GatsbyImageSharpFixed_withWebp
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
