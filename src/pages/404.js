import { Link } from "gatsby"
import React from "react"

import NotFoundLayout from "../components/notfoundlayout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <NotFoundLayout>
    <SEO title="404: Not found" />
    <header className="error-intro">
      <div className="container">
        <div className="grid not-found">
          <div className="column-xs-12">
            <span className="face" aria-label="Page not found"><span aria-hidden="true">(</span> ·<sup aria-hidden="true">︵</sup>· <span aria-hidden="true">)</span></span>
            <p className="lead"><Link className="link" href="/">Go back home</Link></p>
          </div>
        </div>
      </div>
    </header>
  </NotFoundLayout>
)

export default NotFoundPage
