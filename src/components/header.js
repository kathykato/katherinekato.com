import React from 'react'
import { Link } from 'gatsby'

const Header = () => (
  <header>
    <nav>
      <div className="container">
        <div className="grid">
          <div className="column-xs-7 column-md-9">
            <span>Katherine Kato</span>
          </div>
          <div className="column-xs-5 column-md-3">
            <ul>
              <li><Link to="/">Work</Link></li>
              <li><a href="mailto:katherine.a.kato@gmail.com">Contact</a></li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </header>
)

export default Header
