import React from 'react'
import { Link } from 'gatsby'

import NotFoundLayout from '../components/notfoundlayout'

const NotFoundPage = () => (
  <NotFoundLayout>
    <div className="container">
      <div className="grid not-found">
        <div className="column-xs-12">
          <h1 className="face"><span>(</span> ·<sup>︵</sup>· <span>)</span></h1>
          <h2>Nothing to see here.</h2>
          <Link className="page-link" to="/">Go back home</Link>
        </div>
      </div>
    </div>
  </NotFoundLayout>
)

export default NotFoundPage
