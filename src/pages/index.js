import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'

const Socials = [
  {
    name: 'Twitter',
    link: 'https://twitter.com/kato_katherine'
  }, {
    name: 'Instagram',
    link: 'https://www.instagram.com/kathy.kato'
  }, {
    name: 'Dribbble',
    link: 'https://dribbble.com/kathykato'
  }, {
    name: 'CodePen',
    link: 'https://codepen.io/kathykato'
  }, {
    name: 'GitHub',
    link: 'https://github.com/kathykato'
  }
]

const IndexPage = ({data}) => (
  <div className="container">
    <div className="grid hero">
      <div className="column-xs-12">
      <h1 className="main-heading">Hello, I'm <span className="highlight">Katherine Kato.</span> I'm a front-end web developer based in Seattle. I enjoy crafting digital experiences through code &amp; design.</h1>
      </div>
        </div>
  <div className="grid">
    {data.allMarkdownRemark.edges.map(item => (
    <div className="column-xs-12 column-md-6">
      <figure key={item.node.id}>
        <Link to={item.node.frontmatter.path}>
          <Img className="portfolio-img" sizes={item.node.frontmatter.featuredImage.childImageSharp.sizes} alt={item.node.frontmatter.title} />
        </Link>
        <figcaption>
          <Link to={item.node.frontmatter.path}>
            <h3>{item.node.frontmatter.title}</h3>
          </Link>
          <p>{item.node.frontmatter.subtitle}</p>
        </figcaption>
      </figure>
    </div>
    ))}
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
            subtitle
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
    }
  }
`

export default IndexPage
