import React from "react";
import { graphql, Link } from "gatsby";
import Helmet from "react-helmet";
import { AllTagContent } from "../components/TagsComponents";
import { kebabCase } from "lodash";
import { Banner } from "../components/Header";

export default props => {
  const { allTags } = props.data;
  const { edges: tags } = allTags;
  let tagArray = [];
  tags.forEach(({ node: tagItem }) => {
    if (
      "tags" in tagItem.frontmatter &&
      tagItem.frontmatter.tags &&
      tagItem.frontmatter.tags.length > 0
    ) {
      tagItem.frontmatter.tags.forEach(tag => {
        if (tag && tagArray.indexOf(tag) === -1) tagArray.push(tag);
      });
    }
  });
  const { language } = props.pageContext;
  const isEn = language === "en";
  return (
    <div style={{ width: "100%" }}>
      <Banner title="Tags" />
      <AllTagContent>
        <Helmet>
          <title>Tags</title>
          <meta
            name="description"
            content={
              isEn
                ? "Index of the tags used to describe our projects and blog posts"
                : "Índice das tags utilizadas na descrição dos nossos projetos e postagens do blog"
            }
          />
          <link
            rel="canonical"
            href={`https://appmasters.io/${language}/tags/`}
          />
        </Helmet>
        <ul>
          {tagArray
            .sort(function(a, b) {
              if (a.toLowerCase() < b.toLowerCase()) {
                return -1;
              }
              if (a.toLowerCase() > b.toLowerCase()) {
                return 1;
              }
              return 0;
            })
            .map((tag, i) => {
              return (
                <li key={i}>
                  <Link
                    to={`/${props.pageContext.language}/tags/${kebabCase(
                      tag
                    )}/`}
                  >
                    {tag}
                  </Link>
                </li>
              );
            })}
        </ul>
      </AllTagContent>
    </div>
  );
};

export const query = graphql`
  query AllTagsPage($language: String!) {
    allTags: allMarkdownRemark(
      filter: {
        frontmatter: {
          language: { eq: $language }
          templateKey: { in: ["project-page", "blog-post", "technology-page"] }
        }
      }
    ) {
      edges {
        node {
          frontmatter {
            tags
          }
        }
      }
    }
  }
`;
