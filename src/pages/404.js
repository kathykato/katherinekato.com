import { Link } from "gatsby"
import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <header className="intro">
      <div className="container">
        <div className="grid">
        <div className="column-xs-12 column-sm-12 column-md-10">
          <h1>404</h1>
          <p className="lead">Page not found</p>
          <p className="lead"><Link className="link" href="/">Go back home</Link></p>
        </div>
      </div>
    </div>
  </header>
  </Layout>
)

export default NotFoundPage
