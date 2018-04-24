import React from 'react'
import Link from 'gatsby-link'

const Navigation = () => (
  <nav
    style={{
      background: '#f4f4f4',
      paddingTop: '10px',
    }}
  >
    <div className="container">
      <div className="grid">
        <div className="column-xs-12 column-md-9">
          <Link to="/">Katherine Kato</Link>
        </div>
        <div className="column-xs-12 column-md-3">
          <ul
            style={{
              listStyle: 'none',
              display: 'flex',
              justifyContent: 'space-evenly',
            }}>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/portfolio">Portfolio</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
)

export default Navigation
