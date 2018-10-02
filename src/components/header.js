import React from 'react'

import AnchorLink from 'react-anchor-link-smooth-scroll'

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
              <li><AnchorLink href="#work">Work</AnchorLink></li>
              <li><AnchorLink href="#about">About</AnchorLink></li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </header>
)

export default Header
