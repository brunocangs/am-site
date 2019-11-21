import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import { Banner } from "../components/Header";
import { AboutContainer } from "../components/AboutComponents";

export default ({ data, pageContext: { language } }) => {
  const isEn = language === "en";
  return (
    <>
      <Helmet>
        <title>{data.page.frontmatter.title}</title>
        <meta
          name="description"
          content={
            isEn
              ? "More detailed description about the company's history and mindset"
              : "Descrição mais detalhada da história da empresa e seu mindset"
          }
        />
        <link
          rel="canonical"
          href={`https://appmasters.io/${language}/${
            isEn ? "about" : "sobre"
          }/`}
        />
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
