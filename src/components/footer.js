import React from "react"

const Socials = [
  {
    name: 'CodePen',
    link: 'https://codepen.io/kathykato'
  }, {
    name: 'GitHub',
    link: 'https://github.com/kathykato'
  }, {
    name: 'Dribbble',
    link: 'https://dribbble.com/kathykato'
  }, {
    name: 'Twitter',
    link: 'https://twitter.com/kato_katherine'
  }, {
    name: 'Instagram',
    link: 'https://www.instagram.com/kathy.kato'
  }
]

const Footer = () => (
  <footer>
    <div className="container">
      <div className="grid">
        <div className="column-xs-12 column-sm-12 column-md-7">
          <ul>
            {Socials.map(link => (
            <li><a className="link" href={link.link} title={link.name} target="_blank" rel="noopener noreferrer">{link.name}</a></li>
            ))}
          </ul>
        </div>
        <div className="column-xs-12 column-sm-12 column-md-5">
          <span id="copyright">Designed and built by Katherine Kato &copy; {new Date().getFullYear()}</span>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
