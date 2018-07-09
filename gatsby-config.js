module.exports = {
  siteMetadata: {
    title: 'Katherine Kato',
    description: 'A front-end web developer based in Seattle. I enjoy crafting digital experiences through code & design.'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-catch-links',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages'
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
            },
          },
          'gatsby-remark-copy-linked-files',
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-90063956-1",
        head: false,
        anonymize: true,
        respectDNT: true,
        exclude: ["/preview/**", "/do-not-track/me/too/"],
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    `gatsby-plugin-offline`,
  ],
}
