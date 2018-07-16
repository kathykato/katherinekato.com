import React from 'react'
import Layout from '../components/layout'

const NotFoundPage = () => (
  <Layout>
    <div className="container">
      <div className="grid hero">
        <div className="column-xs-12">
          <h1>404</h1>
          <p>Oops! Looks like the page you are looking for does not exist.</p>
        </div>
      </div>
    </div>
  </Layout>
)

export default NotFoundPage
