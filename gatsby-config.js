const cfg = {
  siteMetadata: {
    title: "App Masters - Juiz de Fora/MG",
    siteUrl: "https://appmasters.io",
    description:
      "This is the website for the company App Masters located in Juiz de Fora, Minas Gerais, Brasil. App Masters is a tech startup specialized in mobile and web development"
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sass",
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/static/img`,
        name: "uploads"
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages"
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/img`,
        name: "images"
      }
    },
    {
      resolve: "gatsby-plugin-sharp",
      options: {
        defaultQuality: 100
      }
    },
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-relative-images",
            options: {
              name: "uploads"
            }
          },
          {
            resolve: "gatsby-remark-images",
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 2048
            }
          },
          {
            resolve: "gatsby-remark-copy-linked-files",
            options: {
              destinationDir: "static"
            }
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-smartypants`
        ]
      }
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /svgs/ // See below to configure properly
        }
      }
    },
    `gatsby-plugin-layout`,
    {
      resolve: "gatsby-plugin-netlify-cms",
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`
      }
    }, // must be after other CSS plugins
    `gatsby-plugin-sitemap`,
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/favicon.png"
      }
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-robots-txt`,
    "gatsby-plugin-netlify" // make sure to keep it last in the array
  ]
};

if (process.env.NODE_ENV !== "development") {
  const path = require("path");
  require("dotenv").config({
    path: path.resolve(__dirname, `.env.${process.env.NODE_ENV}`)
  });
  const googleAnalyticsCfg = {
    resolve: "gatsby-plugin-google-analytics",
    options: {
      trackingId: process.env.GATSBY_GOOGLE_ANALYTICS_ID,
      head: false,
      anonymize: true,
      respectDNT: true
    }
  };
  const facebookPixelCfg = {
    resolve: `gatsby-plugin-facebook-pixel`,
    options: {
      pixelId: process.env.GATSBY_PIXEL_ID
    }
  };
  cfg.plugins.push(googleAnalyticsCfg);
  cfg.plugins.push(facebookPixelCfg);
}

module.exports = cfg;
