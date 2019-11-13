const _ = require("lodash");
const path = require("path");
const { createFilePath } = require("gatsby-source-filesystem");
const { fmImagesToRelative } = require("gatsby-remark-relative-images");

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  return graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              title
              tags
              templateKey
              baseUrl
              language
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString()));
      return Promise.reject(result.errors);
    }

    const posts = result.data.allMarkdownRemark.edges;

    posts.forEach(edge => {
      if (!edge.node.frontmatter.templateKey) return;
      const id = edge.node.id;
      let path = "";
      if (edge.node.frontmatter.baseUrl) {
        const { baseUrl } = edge.node.frontmatter;
        const url = baseUrl.startsWith("/") ? baseUrl : `/${baseUrl}`;
        path += `${edge.node.frontmatter.language}${url}`;
        if (edge.node.fields.slug !== "index") {
          path += `/${edge.node.fields.slug}`;
        }
      } else {
        path += edge.node.fields.slug;
      }
      createPage({
        path,
        tags: edge.node.frontmatter.tags,
        component: require.resolve(
          `./src/templates/${String(edge.node.frontmatter.templateKey)}.js`
        ),
        // additional data can be passed via context
        context: {
          id,
          language: edge.node.frontmatter.language,
          tags: edge.node.frontmatter.tags,
          title: edge.node.frontmatter.title || ""
        }
      });
    });

    // Tag pages:
    let tags = [];
    // Iterate through each post, putting all found tags into `tags`
    posts.forEach(edge => {
      if (_.get(edge, `node.frontmatter.tags`)) {
        tags = tags.concat(
          edge.node.frontmatter.tags.map(tag => ({
            tag,
            language: edge.node.frontmatter.language
          }))
        );
      }
    });
    // Eliminate duplicate and empty tags
    tags = _.uniq(tags).filter(tag => !!tag.tag);

    // Make tag pages
    tags.forEach(tag => {
      const tagPath = `/${tag.language}/tags/${_.kebabCase(tag.tag)}/`;

      createPage({
        path: tagPath,
        component: path.resolve(`src/templates/tags.js`),
        context: tag
      });
    });
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  fmImagesToRelative(node); // convert image paths for gatsby images

  if (node.internal.type === `MarkdownRemark`) {
    let value = createFilePath({ node, getNode });
    // Arruma o slug do arquivo
    value = value.split("/")[2];
    // Pula slug para arquivos que começam com index-... (Páginas base e não slugs)
    if (value.indexOf("index") === -1) {
      value = value.match(/(.*)-\w{2}/)[1];
    } else {
      value = "index";
    }
    createNodeField({
      name: `slug`,
      node,
      value
    });
  }
};
