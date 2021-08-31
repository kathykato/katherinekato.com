import { Link } from "gatsby"
import React from "react"

import Image from "../components/image"

const Nav = () => (
  <nav>
    <div className="container">
      <div className="grid">
        <div className="column-xs-12 column-sm-6">
          <figure className="avatar">
            <div className="avatar-block">
              <Link href="/" aria-label="Katherine Kato">
                <Image backgroundColor="#c9decc" alt="Katherine Kato" />
              </Link>
            </div>
            <figcaption className="avatar-content">
              <span>Katherine Kato</span>
            </figcaption>
          </figure>
        </div>
        <div className="column-xs-12 column-sm-6">
          <ul>
            <li>
              <a href="#work">Work</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#writing">Writing</a>
            </li>
            <li>
              <a href="mailto:katherine.a.kato@gmail.com">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
)

export default Nav
