import React, { useState } from "react";
import { graphql, Link } from "gatsby";
import Helmet from "react-helmet";
import Img from "gatsby-image";
import {
  Content,
  AllBlogContainer,
  Button,
  PostWrapper
} from "../components/BlogComponents";
import { kebabCase } from "lodash";
import ClampLines from "react-clamp-lines";
import { Banner } from "../components/Header";

export const renderBlogItem = related => ({ node: post }, i) => {
  const { frontmatter, fields } = post;
  const {
    featuredImage,
    title,
    author,
    description,
    language,
    formattedDate,
    tags
  } = frontmatter;
  const image = featuredImage.childImageSharp.fluid;
  return (
    <PostWrapper key={i} related={related}>
      <Img fluid={{ ...image, aspectRatio: 3 }} />
      <div>
        <Link to={`/${language}/blog/${fields.slug}`}>
          <h2>{title}</h2>
          <span>{author}</span>
          <br />
          <span>{formattedDate}</span>
        </Link>
        <ClampLines text={description} lines={3} innerElement="p" />
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
      </div>
    </PostWrapper>
  );
};
export default ({ data, pageContext }) => {
  const [page, setPage] = useState(1);
  const pageSize = page * 3;
  const { allBlogPosts } = data;
  const { edges: blogPosts } = allBlogPosts;
  const isEn = pageContext.language === "en";
  return (
    <>
      <Helmet>
        <title>Blog</title>
      </Helmet>
      <Content>
        <Banner title={"Blog"} />
        <AllBlogContainer>
          <ul>{blogPosts.slice(0, pageSize).map(renderBlogItem(false))}</ul>
          {blogPosts.length === 0 && (
            <p>
              {isEn
                ? `There are no blog posts at the moment, we will add content soon!`
                : `Não temos posts no blog no momento, mas teremos conteúdo em breve`}
            </p>
          )}
        </AllBlogContainer>
        {pageSize < blogPosts.length && (
          <Button variant={"secondary"} onClick={() => setPage(page + 1)}>
            {isEn ? "See more" : "Ver mais"}
          </Button>
        )}
      </Content>
    </>
  );
};

export const query = graphql`
  query AllBlogsPage($language: String!) {
    allBlogPosts: allMarkdownRemark(
      filter: {
        frontmatter: {
          templateKey: { eq: "blog-post" }
          language: { eq: $language }
        }
      }
      sort: { order: DESC, fields: frontmatter___date }
    ) {
      edges {
        node {
          ...BlogPost
        }
      }
    }
    allAuthors: allMarkdownRemark(
      filter: { frontmatter: { baseUrl: { eq: "author" } } }
    ) {
      edges {
        node {
          html
          frontmatter {
            title
            image {
              ...SiteImageFluid
            }
          }
        }
      }
    }
  }
`;
