import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import AOS from "aos"
import "aos/dist/aos.css"

import Layout from "../components/layout"
import Header from "../components/header"
import Footer from "../components/footer"
import SEO from "../components/seo"

class Index extends React.Component {
  componentDidMount() {
    AOS.init({
      once: true,
    })
  }

  render() {
    const data = this.props.data
    const imageOne = data.imageOne.childImageSharp.fluid
    const imageTwo = data.imageTwo.childImageSharp.fluid
    const imageThree = data.imageThree.childImageSharp.fluid
    const imageFour = data.imageFour.childImageSharp.fluid
    const imageFive = data.imageFive.childImageSharp.fluid
    const imageSix = data.imageSix.childImageSharp.fluid

    const Portfolio = [
      {
        name: "Travel",
        subtitle:
          "Layout template featuring a slider with a swipe transition built with CSS Grid and Flexbox.",
        image: imageOne,
        color: "#fee7ca",
        link: "https://codepen.io/kathykato/live/MqYVOq",
      },
      {
        name: "Gallery",
        subtitle:
          "Image gallery template built with CSS Grid and Flexbox featuring text-following cursor hover effects.",
        image: imageTwo,
        color: "#ffdde1",
        link: "https://codepen.io/kathykato/live/KRQOKY",
      },
      {
        name: "Tea Ipsum",
        subtitle:
          "Tea-themed random, placeholder text generator app built with Gatsby.js and React.",
        image: imageThree,
        color: "#c9decc",
        link: "https://teaipsum.netlify.app",
      },
      {
        name: `Luis's Painting`,
        subtitle:
          "Complete branding and website refresh for a painting company in New Jersey.",
        image: imageFour,
        color: "#cbe1f2",
        link: "https://luisspainting.com",
      },
      {
        name: "CSS WordArt",
        subtitle: "WordArt recreated in pure CSS (SCSS).",
        image: imageFive,
        color: "#f5f5f5",
        link: "https://codepen.io/kathykato/live/omxPap",
      },
      {
        name: "Codevember",
        subtitle: "Creative coding challenge during the month of November.",
        image: imageSix,
        color: "#ffddbf",
        link: "https://github.com/kathykato/codevember",
      },
    ]

    const Blog = [
      {
        title: "4 Ways to Animate the Color of a Text Link on Hover",
        date: "March 2020",
        link:
          "https://css-tricks.com/4-ways-to-animate-the-color-of-a-text-link-on-hover/",
      },
      {
        title: "SVG Properties and CSS",
        date: "May 2019",
        link: "https://css-tricks.com/svg-properties-and-css/",
      },
      {
        title: "Creating Reveal Effects on Scroll",
        date: "February 2019",
        link:
          "https://medium.com/@kathykato/creating-reveal-effects-on-scroll-9cb04b39c9a5",
      },
      {
        title: "How to create an animated logo with SVG and CSS animations",
        date: "August 2018",
        link:
          "https://blog.fullstackdigital.com/how-to-create-an-animated-logo-with-svg-and-css-animations-dbf0802a47a1",
      },
      {
        title: "Creating an animated dashed line background with SVG and CSS",
        date: "July 2018",
        link:
          "https://blog.fullstackdigital.com/creating-an-animated-dashed-line-background-with-svg-and-css-170f89f47000",
      },
      {
        title: "Revisiting My First Pen on CodePen",
        date: "May 2018",
        link:
          "https://codepen.io/kathykato/post/revisiting-my-first-pen-on-codepen",
      },
      {
        title: "Creating Pure CSS Images",
        date: "January 2018",
        link: "https://codepen.io/kathykato/post/creating-pure-css-images",
      },
    ]

    return (
      <Layout>
        <SEO title="Home" />
        <Header />
        <section id="work">
          <div className="container">
            <div className="grid">
              {Portfolio.map(work => (
                <div className="column-xs-12 column-sm-6 portfolio-item">
                  <a
                    href={work.link}
                    aria-label={work.name}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <figure>
                      <div className="img-container" data-aos="image-enter">
                        <Img
                          className="portfolio-img"
                          fluid={work.image}
                          alt={work.name}
                          backgroundColor={work.color}
                        />
                      </div>
                      <figcaption>
                        <h3>{work.name}</h3>
                        <p>{work.subtitle}</p>
                      </figcaption>
                    </figure>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section id="about">
          <div className="container">
            <div className="grid">
              <div className="column-xs-12 column-md-3">
                <h2>About</h2>
              </div>
              <div className="column-xs-12 column-md-7">
                <p>
                  I enjoy translating designs into responsive, interactive
                  experiences in HTML, CSS, and JavaScript with semantic and
                  accessible code. I am constantly staying on top of emerging
                  trends, applying industry best practices, and adapting to
                  modern web technologies and programs. I have a passion for
                  self-learning and strive to improve and challenge my skills to
                  become better at what I do.
                </p>
                <p>
                  My work has been featured in web publications such as the
                  CodePen Spark, Codrops Collective, Web Designer News, and
                  Frontend Focus. I write and share with the web design and
                  development community on{" "}
                  <a
                    class="link"
                    href="https://medium.com/@kathykato"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Medium
                  </a>{" "}
                  and{" "}
                  <a
                    class="link"
                    href="https://dev.to/kathykato"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Dev.to
                  </a>
                  . I have also written for publications like{" "}
                  <a
                    class="link"
                    href="https://css-tricks.com/author/katherinekato/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    CSS-Tricks
                  </a>
                  .
                </p>
                <p>
                  When I'm not coding, you can often find me spending my free
                  time drawing, reading, playing video games, or enjoying a cup
                  of green tea.
                </p>
                <p>
                  You can also find me on{" "}
                  <a
                    class="link"
                    href="https://codepen.io/kathykato"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    CodePen
                  </a>
                  ,{" "}
                  <a
                    class="link"
                    href="https://github.com/kathykato"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                  ,{" "}
                  <a
                    class="link"
                    href="https://dribbble.com/kathykato"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Dribbble
                  </a>
                  ,{" "}
                  <a
                    class="link"
                    href="https://twitter.com/kato_katherine"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Twitter
                  </a>
                  , and{" "}
                  <a
                    class="link"
                    href="https://www.instagram.com/kathy.kato"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Instagram
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="writing">
          <div className="container">
            <div className="grid">
              <div className="column-xs-12 column-md-3">
                <h2>Writing</h2>
              </div>
              <div className="column-xs-12 column-md-7">
                <div id="articles">
                  {Blog.map(post => (
                    <div className="post">
                      <p className="post-title">
                        <a
                          className="link"
                          href={post.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {post.title}
                        </a>
                      </p>
                      <p className="date">{post.date}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </Layout>
    )
  }
}

export default Index

export const pageQuery = graphql`
  query PortfolioQuery {
    imageOne: file(relativePath: { regex: "/travel.png/" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageTwo: file(relativePath: { regex: "/gallery.png/" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageThree: file(relativePath: { regex: "/tea-ipsum.png/" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageFour: file(relativePath: { regex: "/lp.png/" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageFive: file(relativePath: { regex: "/css-wordart.png/" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageSix: file(relativePath: { regex: "/codevember.png/" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`
