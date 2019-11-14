import React from "react";
import { graphql, Link } from "gatsby";
import Helmet from "react-helmet";
import { AllTagContent } from "../components/TagsComponents";
import { kebabCase } from "lodash";

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
  return (
    <AllTagContent>
      <Helmet>
        <title>Tags</title>
      </Helmet>
      <h1>Tags</h1>
      <ul>
        {tagArray.map((tag, i) => {
          return (
            <li key={i}>
              <Link
                to={`/${props.pageContext.language}/tags/${kebabCase(tag)}`}
              >
                {tag}
              </Link>
            </li>
          );
        })}
      </ul>
    </AllTagContent>
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
