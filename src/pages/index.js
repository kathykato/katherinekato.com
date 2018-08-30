import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout'

import ScrollableAnchor from 'react-scrollable-anchor'
import { configureAnchors } from 'react-scrollable-anchor'

configureAnchors({scrollDuration: 800})

class Index extends React.Component {
  render() {
    const data = this.props.data
    const imageOne = data.imageOne.childImageSharp.fluid
    const imageTwo = data.imageTwo.childImageSharp.fluid
    const imageThree = data.imageThree.childImageSharp.fluid
    const imageFour = data.imageFour.childImageSharp.fluid

    const Portfolio = [
      {
        name: 'Codevember',
        subtitle: 'Creative coding challenge during the month of November.',
        image: imageOne,
        link: 'https://github.com/kathykato/codevember'
      }, {
        name: 'Cryptocurrency Comparison',
        subtitle: 'Cryptocurrency comparison app made with React.',
        image: imageTwo,
        link: 'https://github.com/kathykato/cryptocurrency-comparison'
      }, {
        name: 'JavaScript 30',
        subtitle: '30 things with vanilla JavaScript for 30 days.',
        image: imageThree,
        link: 'https://github.com/kathykato/javascript30'
      }, {
        name: 'Gallery Template',
        subtitle: 'Image gallery made with Flexbox and CSS Grid.',
        image: imageFour,
        link: 'https://codepen.io/kathykato/live/KRQOKY'
      }
    ]

    const Blog = [
      {
        title: 'How to create an animated logo with SVG and CSS animations',
        date: 'August 2018',
        link: 'https://blog.fullstackdigital.com/how-to-create-an-animated-logo-with-svg-and-css-animations-dbf0802a47a1'
      }, {
        title: 'Creating an animated dashed line background with SVG and CSS',
        date: 'July 2018',
        link: 'https://blog.fullstackdigital.com/creating-an-animated-dashed-line-background-with-svg-and-css-170f89f47000'
      }, {
        title: 'Revisiting My First Pen on CodePen',
        date: 'May 2018',
        link: 'https://codepen.io/kathykato/post/revisiting-my-first-pen-on-codepen'
      }, {
        title: 'Creating Pure CSS Images',
        date: 'January 2018',
        link: 'https://codepen.io/kathykato/post/creating-pure-css-images'
      }
    ]

    return (
      <Layout>
        <div className="container">
          <section className="grid hero">
            <div className="column-xs-12">
              <h1 className="main-heading">I'm Katherine Kato, a front-end web developer based in Seattle. I enjoy crafting digital experiences through code &amp; design.</h1>
            </div>
          </section>
          <ScrollableAnchor id={'work'}>
          <section className="grid work">
            {Portfolio.map(work => (
              <div className="column-xs-12 column-md-6">
                <a href={work.link} title={work.name} target="_blank" rel="noopener noreferrer">
                  <figure>
                    <Img className="portfolio-img" fluid={work.image} alt={work.name} />
                    <figcaption>
                      <h3>{work.name}</h3>
                      <p>{work.subtitle}</p>
                    </figcaption>
                  </figure>
                </a>
              </div>
            ))}
          </section>
          </ScrollableAnchor>
          <ScrollableAnchor id={'about'}>
          <section className="grid about">
            <div className="column-xs-12">
              <h2>I specialize in web design and front-end web development to create delightful, efficient solutions for the web and mobile.</h2>
            </div>
            <div className="column-xs-12 column-md-3">
              <h3>About Me</h3>
            </div>
            <div className="column-xs-12 column-md-9">
              <p>I enjoy creating interactive, cross-browser designs in HTML, CSS, and JavaScript with clean and semantic code. I am constantly staying on top of the emerging trends, applying industry best practices, and adapting to modern web technologies and programs. I have passion for self-learning and strive to improve and challenge my skills to become better at what I do.</p>
              <p>When I'm not coding, you can often find me spending my free time drawing, reading, or playing video games.</p>
            </div>
            <div className="column-xs-12 column-md-3">
              <h3>Writing</h3>
            </div>
            <div className="column-xs-12 column-md-9">
              <div className="blog">
                {Blog.map(post => (
                  <div className="blog-post">
                    <a href={post.link} title={post.title} target="_blank" rel="noopener noreferrer">
                      <p className="date">{post.date}</p>
                      <h4>{post.title}</h4>
                      <span className="page-link">Read more</span>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </section>
          </ScrollableAnchor>
        </div>
      </Layout>
    )
  }
}

export default Index

export const pageQuery = graphql`
  query IndexQuery {
    imageOne: file(
      relativePath: { regex: "/codevember.png/" }
    ) {
      childImageSharp {
        fluid(
          maxWidth: 800
        ) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageTwo: file(
      relativePath: { regex: "/cryptocurrency-comparison.png/" }
    ) {
      childImageSharp {
        fluid(
          maxWidth: 800
        ) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageThree: file(
      relativePath: { regex: "/js30.png/" }
    ) {
      childImageSharp {
        fluid(
          maxWidth: 800
        ) {
          ...GatsbyImageSharpFluid_noBase64
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
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`
