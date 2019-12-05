import { Link } from "gatsby"
import React from "react"

import AnchorLink from "react-anchor-link-smooth-scroll"
import Image from "../components/image"

const Nav = () => (
  <nav>
    <div className="container">
      <div className="grid">
        <div className="column-xs-12 column-sm-6">
          <figure class="avatar">
            <div class="avatar-block">
              <Link href="/" aria-label="Katherine Kato"><Image backgroundColor="#c9decc" alt="Katherine Kato" /></Link>
            </div>
            <figcaption class="avatar-content">
              <span>Katherine Kato</span>
            </figcaption>
          </figure>
        </div>
        <div class="column-xs-12 column-sm-6">
          <ul>
            <li><AnchorLink href="#work">Work</AnchorLink></li>
            <li><AnchorLink href="#about">About</AnchorLink></li>
            <li><AnchorLink href="#writing">Writing</AnchorLink></li>
            <li><a href="mailto:katherine.a.kato@gmail.com">Contact</a></li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
)

export default Nav
