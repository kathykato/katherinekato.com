module.exports = {
  siteMetadata: {
    title: 'Katherine Kato - Web Designer & Front-End Web Developer',
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-90063956-1`,
      },
    },
    `gatsby-plugin-netlify`,
  ],
}
