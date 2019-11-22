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
        <Link to={`/${language}/blog/${fields.slug}/`}>
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
                to={`/${language}/tags/${kebabCase(tag)}/`}
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
  const pageSize = page * 10;
  const { allBlogPosts } = data;
  const { edges: blogPosts } = allBlogPosts;
  const isEn = pageContext.language === "en";
  return (
    <>
      <Helmet>
        <title>Blog</title>
        <link
          rel="canonical"
          href={`https://appmasters.io/${pageContext.language}/blog/`}
        />
        <meta
          name="description"
          content={
            isEn
              ? "A blog written by the App Masters developers. Includes experience from previous and current projects, as well as experiments or business advice"
              : "Blog mantido pelos funcionários da App Masters. Contém conteúdo sobre tecnologias utilizadas em projetos passados e atuais, processos de seleção e sobre a vida de desenvolvedor."
          }
        ></meta>
        <script type="application/ld+json">
          {`
            <script type="application/ld+json">
            {
              "@context": "https://schema.org",
              "@type": "ItemList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": "1",
                  "item": {
                    "@type": "Recipe",
                    "url": "http://example.com/big_list_of_recipes#cherry_pie",
                    "name": "George's Cherry Pie",
                    "image": [
                      "https://example.com/photos/1x1/photo.jpg",
                      "https://example.com/photos/4x3/photo.jpg",
                      "https://example.com/photos/16x9/photo.jpg"
                    ],
                    "author": {
                      "@type": "Person",
                      "name": "Mary Stone"
                    },
                    "datePublished": "2018-03-10",
                    "description": "I learned this recipe as a youngster.",
                    "prepTime": "PT20M",
                    "cookTime": "PT45M",
                    "totalTime": "PT65M",
                    "keywords": "cake for a party, coffee",
                    "recipeYield": "8 servings",
                    "recipeCategory": "Dessert",
                    "recipeCuisine": "American",
                    "aggregateRating": {
                      "@type": "AggregateRating",
                      "ratingValue": "4.2",
                      "ratingCount": "71"
                    },
                    "nutrition": {
                      "@type": "NutritionInformation",
                      "calories": "270 calories"
                    },
                    "recipeIngredient": [
                      "2 store-bought pie shells",
                      "4 cups tart canned cherries",
                      "1 cup sugar",
                      "1/4 teaspoon almond extract",
                      "3 tablespoons corn or tapioca starch"
                    ],
                    "recipeInstructions": [
                      {
                        "@type": "HowToStep",
                        "text": "Defrost one pie crust"
                      },
                      {
                        "@type": "HowToStep",
                        "text": "Bake the second pie crust at 350ºF for 20 minutes, or until brown."
                      },
                      {
                        "@type": "HowToStep",
                        "text": "In a large bowl, combine sugar, cherries, starch, and almond extract."
                      },
                      {
                        "@type": "HowToStep",
                        "text": "Let the baked crust cool, pour in cherry filling."
                      },
                      {
                        "@type": "HowToStep",
                        "text": "Flatten the defrosted crust on a sheet of wax paper and cut into strips. Weave the strips over the top of the filled pie shell."
                      },
                      {
                        "@type": "HowToStep",
                        "text": "Cover the baked pie crust edge with tin foil to prevent additional browning."
                      },
                      {
                        "@type": "HowToStep",
                        "text": "Bake for 20 minutes, or until firm, and the top crust begins to brown."
                      },
                      {
                        "@type": "HowToStep",
                        "text": "Allow to cool."
                      }
                    ],
                    "video": [
                      {
                        "name": "How to make George's famous cherry pie",
                        "description": "Prepare and bake a great cherry pie",
                        "thumbnailUrl": [
                          "https://example.com/photos/1x1/photo.jpg",
                          "https://example.com/photos/4x3/photo.jpg",
                          "https://example.com/photos/16x9/photo.jpg"
                        ],
                        "contentUrl": "http://www.example.com/video789.mp4",
                        "embedUrl": "http://www.example.com/videoplayer?video=789",
                        "uploadDate": "2018-02-06T08:00:00+08:00",
                        "duration": "PT22M12S",
                        "interactionCount": "2347",
                        "expires": "2020-02-07T08:00:00+08:00"
                      }
                    ]
                  }
                },
                {
                  "@type": "ListItem",
                  "position": "2",
                  "item": {
                    "@context": "https://schema.org/",
                    "@type": "Recipe",
                    "url": "http://example.com/big_list_of_recipes#coffee_cake",
                    "name": "Party Coffee Cake",
                    "image": [
                      "https://example.com/photos/1x1/photo.jpg",
                      "https://example.com/photos/4x3/photo.jpg",
                      "https://example.com/photos/16x9/photo.jpg"
                    ],
                    "author": {
                      "@type": "Person",
                      "name": "Mary Stone"
                    },
                    "datePublished": "2018-03-10",
                    "description": "This coffee cake is awesome and perfect for parties.",
                    "prepTime": "PT20M",
                    "cookTime": "PT30M",
                    "totalTime": "PT50M",
                    "keywords": "cake for a party, coffee",
                    "recipeYield": "10 servings",
                    "recipeCategory": "Dessert",
                    "recipeCuisine": "American",
                    "aggregateRating": {
                      "@type": "AggregateRating",
                      "ratingValue": "5",
                      "ratingCount": "18"
                    },
                    "nutrition": {
                      "@type": "NutritionInformation",
                      "calories": "270 calories"
                    },
                    "recipeIngredient": [
                      "2 cups of flour",
                      "3/4 cup white sugar",
                      "2 teaspoons baking powder",
                      "1/2 teaspoon salt",
                      "1/2 cup butter",
                      "2 eggs",
                      "3/4 cup milk"
                    ],
                    "recipeInstructions": [
                      {
                        "@type": "HowToStep",
                        "text": "Preheat the oven to 350 degrees F. Grease and flour a 9x9 inch pan."
                      },
                      {
                        "@type": "HowToStep",
                        "text": "In a large bowl, combine flour, sugar, baking powder, and salt."
                      },
                      {
                        "@type": "HowToStep",
                        "text": "Mix in the butter, eggs, and milk."
                      },
                      {
                        "@type": "HowToStep",
                        "text": "Spread into the prepared pan."
                      },
                      {
                        "@type": "HowToStep",
                        "text": "Bake for 30 to 35 minutes, or until firm."
                      },
                      {
                        "@type": "HowToStep",
                        "text": "Allow to cool."
                      }
                    ],
                    "video": [
                      {
                        "name": "How to make George's famous cherry pie",
                        "description": "Prepare and bake a great cherry pie",
                        "thumbnailUrl": [
                          "https://example.com/photos/1x1/photo.jpg",
                          "https://example.com/photos/4x3/photo.jpg",
                          "https://example.com/photos/16x9/photo.jpg"
                        ],
                        "contentUrl": "http://www.example.com/video456.mp4",
                        "embedUrl": "http://www.example.com/videoplayer?video=456",
                        "uploadDate": "2018-02-06T08:00:00+08:00",
                        "duration": "PT15M22S",
                        "interactionCount": "2347",
                        "expires": "2020-02-05T08:00:00+08:00"
                      }
                    ]
                  }
                }
              ]
            }
            </script>
          `}
        </script>
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
          <Button onClick={() => setPage(page + 1)}>
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
