require("dotenv").config({
  path: `.env.development`,
})

module.exports = {
  siteMetadata: {
    title: `Manineta Creating - izdelava lesenih umetnin.`,
    titleTemplate: `%s | Manineta Creating`,
    description: `Manineta Creating izdeluje lesene umetnine.`,
    author: `@NikVogrinec`,
    image: "/images/logo_noText.svg",
    facebookUsername: `manineta.graviranje.3`,
    siteUrl: `https://www.manineta.netlify.com`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        start_url: "/",
        theme_color: "#E89D38",
        icon: `src/images/logo_noText.svg`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-background-image`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
