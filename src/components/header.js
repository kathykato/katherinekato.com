import React from 'react'

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
              <li><a href="#work" title="Work">Work</a></li>
              <li><a href="#about" title="About">About</a></li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </header>
)

export default Header
