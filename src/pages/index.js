import React from 'react'

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

const IndexPage = () => (
  <div className="container">
    <div className="grid hero">
      <div className="column-xs-12">
        <h1 className="main-heading">I’m Katherine Kato, a front-end web developer based in Seattle. I enjoy expressing my creativity through code &amp; design.</h1>
        <ul className="social">
          {Socials.map(link => (
            <li><a href={link.link} target="_blank" rel="nofollow">{link.name}</a></li>
          ))}
        </ul>
      </div>
    </div>
  </div>
)

export default IndexPage
