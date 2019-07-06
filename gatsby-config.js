module.exports = {
  siteMetadata: {
    title: `Katherine Kato - UI/UX Designer & Front-End Web Developer`,
    description: `A front-end web developer based in Seattle. I enjoy crafting digital experiences through design and code.`,
    author: `Katherine Kato`,
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
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-90063956-1`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Katherine Kato`,
        short_name: `KKato`,
        start_url: `/`,
        background_color: `#282b42`,
        theme_color: `#282b42`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
  ],
}
