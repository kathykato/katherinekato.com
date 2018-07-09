const path = require('path');

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators

  const portfolioTemplate = path.resolve('./src/templates/portfolio-item.js');

  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            id
            frontmatter {
              path
              title
              subtitle
            }
          }
        }
      }
    }
  `).then(response => {
    if(response.errors) {
      return Promise.reject(response.errors)
    }

    response.data.allMarkdownRemark.edges.forEach(({node}) => {
      createPage({
        path: node.frontmatter.path,
        component: portfolioTemplate
      })
    })
  })
}