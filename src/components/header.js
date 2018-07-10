import React from 'react'
import Link from 'gatsby-link'

const Header = ({ }) => (
  <header>
    <nav>
      <div className="container">
        <div className="grid">
          <div className="column-xs-7 column-md-9">
            <Link to="/">Katherine Kato</Link>
          </div>
          <div className="column-xs-5 column-md-3">
            <ul>
              <li><Link to="/">Work</Link></li>
              <li><Link to="/about">About</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </header>
)

export default Header