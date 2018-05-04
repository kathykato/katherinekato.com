import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'

const PortfolioPage = ({data}) => (
  <div className="portfolio-content">
    <div className="container">
      <div className="grid">
        {data.allMarkdownRemark.edges.map(item => (
        <div className="column-xs-12 column-md-6">
          <figure key={item.node.id}>
            <Link to={item.node.frontmatter.path}>
              <Img sizes={item.node.frontmatter.featuredImage.childImageSharp.sizes} />
            </Link>
            <h2>{item.node.frontmatter.title}</h2>
            <figcaption>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</figcaption>
          </figure>
        </div>
        ))}
      </div>
    </div>
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
            featuredImage {
              childImageSharp {
                sizes(maxWidth: 630) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
          }
        }
      }
    }
  }
`

export default PortfolioPage
