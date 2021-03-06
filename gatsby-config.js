require("dotenv").config({
  path: `.env.development`,
})

module.exports = {
  siteMetadata: {
    title: `Manineta Graviranje - izdelava lesenih umetnin.`,
    titleTemplate: `%s | Manineta Graviranje`,
    description: `Veselje do ustvarjanja,domišljija ter sprostitev ob tem nas je pripeljalo do laserskega graviranja. Graviranje, rezanje ter izdelava različnih nekovinskih izdelkov. Izdelki za darila ob raznih priložnostih kot so rojstni dnevi, krst, poroke, in še in še..`,
    author: `@NikVogrinec`,
    image: "/images/logo_noText.svg",
    facebookUsername: `manineta.graviranje.3`,
    siteUrl: `https://www.manineta.netlify.app`,
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
    `gatsby-plugin-transition-link`,

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
