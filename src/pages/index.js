import React from "react"
import Img from "gatsby-image"

import { graphql } from 'gatsby'

import Layout from '../components/layout'

class Index extends React.Component {
  render() {
    const data = this.props.data
    const codevemberImg = data.codevemberImg.childImageSharp.fluid
    const imageOne = data.imageOne.childImageSharp.fluid
    const imageTwo = data.imageTwo.childImageSharp.fluid
    const imageFour = data.imageFour.childImageSharp.fluid

    const Portfolio = [
      {
        name: 'Codevember',
        subtitle: 'Creative coding challenge during the month of November.',
        image: codevemberImg,
        link: 'https://github.com/kathykato/codevember'
      }, {
        name: 'Cryptocurrency Comparison',
        subtitle: 'Cryptocurrency comparison app made with React.',
        image: imageOne,
        link: 'https://codepen.io/kathykato/live/PEjNGQ/'
      }, {
        name: 'JavaScript 30',
        subtitle: '30 things with vanilla JavaScript for 30 days.',
        image: imageTwo,
        link: 'https://github.com/kathykato/javascript30'
      }, {
        name: 'Gallery Template',
        subtitle: 'Image gallery made with Flexbox and CSS Grid.',
        image: imageFour,
        link: 'https://codepen.io/kathykato/live/KRQOKY'
      }
    ]

    return (
      <Layout>
        <div className="container">
          <div className="grid hero">
            <div className="column-xs-12">
              <h1 className="main-heading">I'm <span className="">Katherine Kato</span>, a front-end web developer based in Seattle. I enjoy crafting digital experiences through code &amp; design.</h1>
            </div>
          </div>
          <div className="grid">
            {Portfolio.map(work => (
              <div className="column-xs-12 column-md-6">
                <figure>
                  <a href={work.link} title={work.name} target="_blank" rel="noopener noreferrer">
                    <Img className="portfolio-img" fluid={work.image} alt={work.name} />
                  </a>
                  <figcaption>
                    <h3><a href={work.link} title={work.name} target="_blank" rel="noopener noreferrer">{work.name}</a></h3>
                    <p>{work.subtitle}</p>
                  </figcaption>
                </figure>
              </div>
            ))}
          </div>
        </div>
      </Layout>
    )
  }
}

export default Index

export const query = graphql`
  query ImageQuery {
    codevemberImg: file(
      relativePath: { regex: "/codevember.png/" }
    ) {
      childImageSharp {
        fluid(
          maxWidth: 800
        ) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageOne: file(
      relativePath: { regex: "/cryptocurrency-comparison.png/" }
    ) {
      childImageSharp {
        fluid(
          maxWidth: 800
        ) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageTwo: file(
      relativePath: { regex: "/js30.png/" }
    ) {
      childImageSharp {
        fluid(
          maxWidth: 800
        ) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageFour: file(
      relativePath: { regex: "/template.png/" }
    ) {
      childImageSharp {
        fluid(
          maxWidth: 800
        ) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
