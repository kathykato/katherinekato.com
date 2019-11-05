/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import "./layout.scss"
import "typeface-assistant";

const NotFoundLayout = ({ children }) => {
  return (
    <>
      {children}
    </>
  )
}

NotFoundLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default NotFoundLayout
