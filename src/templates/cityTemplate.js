import React from "react"
import Helmet from 'react-helmet';
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import PostLink from "../components/post-link"
import HeroHeader from "../components/heroHeader"
import CityNavigation from "../components/cityNavigation";

export default function Template({
  data: {
    site,
    allAirtable: { edges, distinct },
  },
}) {
  const Posts = edges
    .map(edge => <PostLink key={edge.node.data.Nazwa} post={edge.node} />)
    
  return (
    <Layout>
      <Helmet>
        <title>{site.siteMetadata.title}</title>
        <meta name="description" content={site.siteMetadata.description} />
        {!site.siteMetadata.w3l_dom_key ? null : <meta name="w3l-domain-verification" content={site.siteMetadata.w3l_dom_key} />}
      </Helmet>
      <HeroHeader />
      <h2>Lista Firm &darr;</h2>
      <CityNavigation cities={distinct} />
      <div className="grids">
        {Posts}
      </div>
    </Layout>
  )
}

// export const pageQuery = graphql`
//   query($path: String!) {
//     markdownRemark(frontmatter: { path: { eq: $path } }) {
//       html
//       frontmatter {
//         date(formatString: "MMMM DD, YYYY")
//         path
//         title
//         thumbnail
//         metaDescription
//       }
//     }
//   }
// `

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        w3l_dom_key
      }
    }
    allAirtable {
      distinct(field: data___Miasto)
      edges {
        node {
          data {
            Logo {
              url
            }
            Nazwa
            Miasto
            Opis
            Zamawianie
            Bezludziowo
            Link
          }
        }
      }
    }
  }
`