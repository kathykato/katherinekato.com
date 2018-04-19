import React from 'react'
import Link from 'gatsby-link'

const PortfolioPage = ({data}) => (
  <div>
    <h1>Portfolio</h1>
    {data.allMarkdownRemark.edges.map(item => (
      <div key={item.node.id}>
        <h3>{item.node.frontmatter.title}</h3>
        <Link to={item.node.frontmatter.path}>Read More</Link>
      </div>
    ))}
  </div>
)

export const pageQuery = graphql`
  query PortfolioIndexQuery {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            path
            title
          }
        }
      }
    }
  }
`

export default PortfolioPage
