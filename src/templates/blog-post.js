import React from "react";
import { graphql, Link } from "gatsby";
import Helmet from "react-helmet";
import {
  Post,
  PostContent,
  AllBlogContainer
} from "../components/BlogComponents";
import Img from "gatsby-image";
import { kebabCase } from "lodash";
import { renderBlogItem } from "./all-blog-page";

export default ({ data }) => {
  const { html, frontmatter } = data.post;
  const { edges: authors } = data.allAuthors;
  const { title, language, featuredImage, tags, author } = frontmatter;
  const image = featuredImage.childImageSharp.fluid;
  const { node: postAuthor } = authors.find(
    i => i.node.frontmatter.title === author
  );
  const { edges: relatedPosts } = data.allRelatedPosts;
  const isEn = language === "en";
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="keywords" content={tags.join(", ")}></meta>
      </Helmet>
      <Post>
        <Img fluid={{ ...image }} />
        <PostContent>
          <h1>{title}</h1>
          <div>
            {tags.map((tag, i) => {
              return (
                <Link
                  to={`/${language}/tags/${kebabCase(tag)}`}
                  key={i}
                  style={{ display: "block" }}
                >
                  {tag}
                </Link>
              );
            })}
          </div>
          <div
            dangerouslySetInnerHTML={{ __html: html }}
            style={{ borderBottom: "1px solid #eee", paddingBottom: 24 }}
          />
          <div>
            <Img
              fixed={postAuthor.frontmatter.image.childImageSharp.fixed}
              imgStyle={{ borderRadius: "100%" }}
            />
            <div>
              <h3>{postAuthor.frontmatter.title}</h3>
              <div dangerouslySetInnerHTML={{ __html: postAuthor.html }} />
            </div>
          </div>
          <h1 style={{ marginTop: 48 }}>
            {isEn ? "Related posts" : "Posts relacionados"}
          </h1>
          <AllBlogContainer related>
            {relatedPosts.length > 0 ? (
              <ul>{relatedPosts.map(renderBlogItem(true))}</ul>
            ) : (
              <p style={{ margin: 8 }}>
                {isEn
                  ? `We couldn't find any posts related to this one`
                  : "Não encontramos nenhum post relacionado a este"}
              </p>
            )}
          </AllBlogContainer>
        </PostContent>
      </Post>
    </>
  );
};

export const query = graphql`
  fragment BlogPost on MarkdownRemark {
    id
    html
    rawMarkdownBody
    fields {
      slug
    }
    frontmatter {
      formattedDate: date(formatString: "DD MMM YYYY", locale: $language)
      templateKey
      title
      language
      baseUrl
      date
      author
      description
      featuredPost
      featuredImage {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      tags
    }
    parent {
      ... on File {
        birthTime
      }
    }
  }
  query BlogPostQuery(
    $id: String!
    $language: String!
    $tags: [String]!
    $title: String!
  ) {
    post: markdownRemark(id: { eq: $id }) {
      ...BlogPost
    }
    allAuthors: allMarkdownRemark(
      filter: {
        frontmatter: { language: { eq: $language }, baseUrl: { eq: "author" } }
      }
    ) {
      edges {
        node {
          id
          html
          frontmatter {
            title
            image {
              childImageSharp {
                fixed(width: 64, height: 64) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    }
    allRelatedPosts: allMarkdownRemark(
      filter: {
        frontmatter: {
          tags: { in: $tags }
          language: { eq: $language }
          templateKey: { eq: "blog-post" }
          title: { ne: $title }
        }
      }
      sort: { order: DESC, fields: frontmatter___date }
      limit: 3
    ) {
      edges {
        node {
          ...BlogPost
        }
      }
    }
  }
`;
