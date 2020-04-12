import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import 'prismjs/themes/prism-okaidia.css';

export default ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  return (
    <div className="site-wrapper">
      <header className="site-header">
        <div className="site-title">
          <Link to="/">{data.site.siteMetadata.title}</Link>
        </div>
      </header>
      {children}
      <footer className="site-footer">
        <p>Crafted with <span role="img" aria-label="love">❤️</span> by <a href="https://github.com/EwaTrzemzalska" target="_blank">Ewa Trzemżalska</a> (source on <a href="https://github.com/EwaTrzemzalska/japodjade" target="_blank">GitHub)</a></p>
        <p>Template by <a href="https://w3layouts.com" target="_blank">W3Layouts</a></p>
      </footer>
    </div>
  )
}