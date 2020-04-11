import React from "react"
import Helmet from 'react-helmet';
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import PostLink from "../components/post-link"
import HeroHeader from "../components/heroHeader"
import CityNavigation from "../components/cityNavigation";

const IndexPage = ({
  data: {
    site,
    allAirtable: { edges },
  },
}) => {
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
      <CityNavigation cities={["Kraków", "Warszawa"]} />
      <div className="grids">
        {Posts}
      </div>
    </Layout>
  )
}

export default IndexPage
export const pageQuery = graphql`
  query indexPageQuery {
    site {
      siteMetadata {
        title
        description
        w3l_dom_key
      }
    }
    allAirtable {
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