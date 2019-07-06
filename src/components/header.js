import { Link } from "gatsby"
import React from "react"

const Header = () => (
  <header className="intro">
    <div className="container">
      <div className="grid">
      <div className="column-xs-12 column-sm-12 column-md-10">
        <h1>Hi! I'm Katherine Kato, a front-end web developer based in Seattle.</h1>
        <p className="lead">I enjoy crafting digital experiences through design and code. I specialize in UI/UX design and front-end web development, focusing on turning ideas into delightful and meaningful solutions.</p>
        <p className="lead"><Link className="link" href="#about">More about me</Link></p>
        </div>
      </div>
    </div>
  </header>
)

export default Header
