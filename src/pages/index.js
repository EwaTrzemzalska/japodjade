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
    allAirtable: { edges, distinct },
  },
}) => {
  const Posts = edges
    .map(edge => <PostLink key={edge.node.data.Nazwa} post={edge.node} />)

  return (
    <Layout>
      <Helmet>
        <title>{site.siteMetadata.title}</title>
        <meta name="description" content={site.siteMetadata.description} />
        <meta property="og:url" content="https://www.japodjade.pl" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Japodjadę" />
        <meta property="og:description" content="Jesteśmy tu po to, żeby połączyć lokalnych dostawców z klientami!" />
        <meta property="og:image" content="https://www.japodjade.pl/assets/fbimg.png" />
        <meta property="og:image:width" content="600" />
        <meta property="og:image:height" content="315" />
        {!site.siteMetadata.w3l_dom_key ? null : <meta name="w3l-domain-verification" content={site.siteMetadata.w3l_dom_key} />}
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-163532894-1"></script>
        <script>
          {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments)}
          gtag('js', new Date());

          gtag('config', 'UA-163532894-1');`}
        </script>
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
    allAirtable(filter: {data: {Published: {eq: true}}}) {
      distinct(field: data___Miasto)
      edges {
        node {
          data {
            Logo {
            localFiles {
              publicURL
            }
          }
            Nazwa
            Miasto
            Opis
            Kontakt
            Bezkontaktowo
            Link
          }
        }
      }
    }
  }
`