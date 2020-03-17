import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import { kebabCase } from 'lodash';
import React from 'react';
import Helmet from 'react-helmet';

import { AllBlogContainer, Post, PostContent } from '../components/BlogComponents';
import { renderBlogItem } from './all-blog-page';

export default ({ data }) => {
  const {
    html,
    frontmatter,
    fields: { slug },
    parent: { mtime }
    // tableOfContents
  } = data.post;
  const { edges: authors } = data.allAuthors;
  const {
    title,
    language,
    featuredImage,
    tags,
    author,
    description,
    date
  } = frontmatter;
  const {
    fluid: image,
    meta1x1,
    meta4x3,
    meta16x9
  } = featuredImage.childImageSharp;
  const { node: postAuthor } = authors.find(
    i => i.node.frontmatter.title === author
  );
  const { edges: relatedPosts } = data.allRelatedPosts;
  const isEn = language === "en";
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <link
          rel="canonical"
          href={`https://appmasters.io/${language}/blog/${slug}/`}
        />
        <meta name="keywords" content={tags.join(", ")}></meta>
        <meta name="description" content={description} />
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [{
              "@type": "ListItem",
              "position": 1,
              "name": "App Masters",
              "item": "https://appmasters.io/${language}/"
            },{
              "@type": "ListItem",
              "position": 2,
              "name": "Blog",
              "item": "https://appmasters.io/${language}/blog/"
            },{
              "@type": "ListItem",
              "position": 3,
              "name": "${title}",
              "item": "https://appmasters.io/${language}/blog/${slug}/"
            }]
          }
          `}
        </script>
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "Article",
            "image": ${JSON.stringify(
              [meta1x1.src, meta4x3.src, meta16x9.src].map(
                i => `https://appmasters.io${i}`
              )
            )},
            "datePublished": "${date}",
            "headline": "${title}",
            "author": "${postAuthor.frontmatter.title}",
            "publisher": {
              "@type":"Organization",
              "name": "App Masters",
              "logo": {
                "@type": "ImageObject",
                "height": ${data.publisherLogo.childImageSharp.fixed.height},
                "width": ${data.publisherLogo.childImageSharp.fixed.width},
                "url": "${data.publisherLogo.childImageSharp.fixed.src}"
              }
            },
            "dateModified": "${mtime}",
            "mainEntityOfPage": "https://appmasters.io/${language}/blog/${slug}/"
          }
          `}
        </script>
      </Helmet>
      <Post>
        <Img fluid={{ ...image }} />
        <PostContent>
          <h1>{title}</h1>
          <div>
            {tags.map((tag, i) => {
              return (
                <Link
                  to={`/${language}/tags/${kebabCase(tag)}/`}
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
          <h2 style={{ marginTop: 48 }}>
            {isEn ? "Related posts" : "Posts relacionados"}
          </h2>
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
    # tableOfContents
    fields {
      slug
    }
    parent {
      ... on File {
        mtime
      }
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
            ...GatsbyImageSharpFluid_withWebp
          }
          meta1x1: fixed(
            width: 500
            height: 500
            fit: COVER
            quality: 50
            cropFocus: ATTENTION
          ) {
            src
          }
          meta4x3: fixed(
            width: 800
            height: 600
            fit: COVER
            quality: 50
            cropFocus: ATTENTION
          ) {
            src
          }
          meta16x9: fixed(
            width: 960
            height: 540
            fit: COVER
            quality: 50
            cropFocus: ATTENTION
          ) {
            src
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
                  ...GatsbyImageSharpFixed_withWebp
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
    publisherLogo: file(relativePath: { eq: "publisher_white_logo.png" }) {
      childImageSharp {
        fixed(height: 60) {
          src
          height
          width
        }
      }
    }
  }
`;
