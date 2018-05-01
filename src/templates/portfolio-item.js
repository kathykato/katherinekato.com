import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'

export default function Template({data}) {
  const item = data.markdownRemark

  return (
    <div className="portfolio-content">
      <div className="container">
        <div className="grid">
          <div className="column-xs-12">
            <Link to="/portfolio">Go Back</Link>
            <h1>{item.frontmatter.title}</h1>
            <Img sizes={item.frontmatter.featuredImage.childImageSharp.sizes} />
            <div dangerouslySetInnerHTML={{__html: item.html}} />
          </div>
        </div>
      </div>
    </div>
  )
}

export const itemQuery = graphql`
  query ItemPostByPath($path: String!) {
    markdownRemark(frontmatter: {path: {eq: $path}}) {
      html
      frontmatter {
        path
        title
        featuredImage {
          childImageSharp {
            sizes(maxWidth: 800) {
              ...GatsbyImageSharpSizes
            }
          }
        }
      }
    }
  }
`
