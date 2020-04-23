import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import 'prismjs/themes/prism-okaidia.css';
import { ModalProvider } from 'styled-react-modal'

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
      <div className="site-wrapper" id="main">
        <header className="site-header">
          <div className="site-title">
            <Link to="/">{data.site.siteMetadata.title}</Link>
          </div>
        </header>
        <ModalProvider>
          {children}
        </ModalProvider>
        <footer className="site-footer">
          <p>Crafted with <span role="img" aria-label="love">❤️</span> by <a href="https://github.com/EwaTrzemzalska" target="_blank" rel="noopener noreferrer">Ewa Trzemżalska</a> (source on <a href="https://github.com/EwaTrzemzalska/japodjade" target="_blank" rel="noopener noreferrer">GitHub)</a></p>
          <p>Template by <a href="https://w3layouts.com" target="_blank" rel="noopener noreferrer">W3Layouts</a></p>
        </footer>
      </div>
  )
}