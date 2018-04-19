import React from 'react'
import Link from 'gatsby-link'

export default function Template({data}) {
  const item = data.markdownRemark

  return (
    <div>
      <Link to="/portfolio">Go Back</Link>
      <h1>{item.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{__html: item.html}} />
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
      }
    }
  }
`
