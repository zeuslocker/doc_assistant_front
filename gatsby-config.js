/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Doctor Assistant`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: ["gatsby-plugin-postcss", "gatsby-plugin-image", "gatsby-plugin-sitemap", "gatsby-plugin-resolve-src", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/icon.png"
    }
  }, "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  },
  {
    resolve: 'gatsby-plugin-apollo',
    options: {
      uri: 'http://localhost:4000/graphql'
    }
  }
  ]
};
