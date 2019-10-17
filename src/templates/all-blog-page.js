import React, { useState, useRef, useEffect } from "react";
import { graphql, Link } from "gatsby";
import Helmet from "react-helmet";
import Img from "gatsby-image";
import {
  Content,
  AllBlogContainer,
  Button
} from "../components/BlogComponents";
import { kebabCase } from "lodash";
import ClampLines from "react-clamp-lines";
import Fuse from "fuse.js";
import { FaUser } from "react-icons/fa";

const ComponentName = ({ data, pageContext }) => {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const { bannerImage, allBlogPosts } = data;
  const banner = bannerImage.childImageSharp.fluid;
  const { edges: blogPosts } = allBlogPosts;
  const isEn = pageContext.language === "en";
  const fuse = useRef(
    new Fuse(blogPosts.map(({ node }) => node), {
      keys: ["frontmatter.title", "rawMarkdownBody", "frontmatter.tags"],
      threshold: 0.2
    })
  );
  return (
    <>
      <Helmet>
        <title>Blog - App Masters</title>
      </Helmet>
      <Content>
        <div>
          <Img fluid={banner} />
          <h1>Blog</h1>
        </div>
        <AllBlogContainer>
          <div>
            <input
              type="text"
              value={search}
              onChange={({ target: { value } }) => setSearch(value)}
              placeholder={isEn ? "Search" : "Buscar"}
            />
            <ul>
              {fuse.current.search(search).map((item, i) => {
                const {
                  frontmatter: { language },
                  fields: { slug }
                } = item;
                return (
                  <li key={i}>
                    <Link to={`/${language}/blog/${slug}`}>
                      {item.frontmatter.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <ul>
            {blogPosts.slice(0, page * 5).map(({ node: post }, i) => {
              const { frontmatter, html, fields } = post;
              const {
                featuredImage,
                title,
                date,
                author,
                description,
                language,
                formattedDate,
                tags
              } = frontmatter;
              const image = featuredImage.childImageSharp.fluid;
              return (
                <li key={i}>
                  <Img fluid={{ ...image, aspectRatio: 2.5 }} />
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
                </li>
              );
            })}
          </ul>
          {page * 5 < blogPosts.length && (
            <Button onClick={() => setPage(page + 1)}>
              {isEn ? "See more" : "Ver mais"}
            </Button>
          )}
        </AllBlogContainer>
      </Content>
    </>
  );
};

export const query = graphql`
  query AllBlogsPage($language: String!) {
    allBlogPosts: allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
      sort: { order: ASC, fields: frontmatter___date }
    ) {
      edges {
        node {
          ...BlogPost
          frontmatter {
            formattedDate: date(
              formatString: "DD MMM YYYY - HH:mm"
              locale: $language
            )
          }
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
    bannerImage: file(relativePath: { eq: "breadcrumb.png" }) {
      ...SiteImageFluid
    }
  }
`;

export default ComponentName;
