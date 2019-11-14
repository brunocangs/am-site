import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import { Banner } from "../components/Header";
import { AboutContainer } from "../components/AboutComponents";

export default ({ data }) => {
  return (
    <>
      <Helmet>
        <title>{data.page.frontmatter.title}</title>
      </Helmet>
      <div style={{ width: "100%" }}>
        <Banner title={data.page.frontmatter.title} />
        <AboutContainer dangerouslySetInnerHTML={{ __html: data.page.html }} />
      </div>
    </>
  );
};

export const query = graphql`
  fragment AboutPage on MarkdownRemark {
    html
    frontmatter {
      language
      title
    }
  }

  query AboutPageQuery($language: String!) {
    page: markdownRemark(
      frontmatter: {
        templateKey: { eq: "about-page" }
        language: { eq: $language }
      }
    ) {
      ...AboutPage
    }
  }
`;
