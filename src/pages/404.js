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
            <h1 className="face"><span>(</span> ·<sup>︵</sup>· <span>)</span></h1>
            <h2>Nothing to see here.</h2>
            <p className="lead"><Link className="link" href="/">Go back home</Link></p>
          </div>
        </div>
      </div>
    </header>
  </NotFoundLayout>
)

export default NotFoundPage
