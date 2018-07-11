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

const Footer = ({ }) => (
  <footer>
    <div className="container">
      <div className="grid">
        <div className="column-xs-12">
          <ul className="social">
            {Socials.map(link => (
              <li><a href={link.link} title={link.name} target="_blank" rel="noopener">{link.name}</a></li>
            ))}
          </ul>
          <p className="copyright">&copy; 2018 Katherine Kato.</p>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
