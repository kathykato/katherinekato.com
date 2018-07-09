import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header'
import Footer from '../components/footer'
import Background from '../components/background'
import './index.css'

require('typeface-assistant')

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'A front-end web developer based in Seattle. I enjoy crafting digital experiences through code & design.' },
        { name: 'keywords', content: 'katherine kato, web design, front-end web development' },
      ]}
    />
    <Background />

    <Header />

    <section className="page-content">
      {children()}
    </section>

    <Footer />
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
