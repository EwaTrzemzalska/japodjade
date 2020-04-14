/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `JAPODJADĘ`,
    description: `A starter blog demonstrating what Gatsby can do.`,
    siteUrl: `https://delog-w3layouts.netlify.com/`,
    home: {
      title: `Cześć!`,
      description: `Jesteśmy tu po to, żeby połączyć lokalnych dostawców z klientami!`,
    },
    /* W3Layouts domain verification key for contact forms https://my.w3layouts.com/Forms/ */
    w3l_dom_key: `5e609f7a2d23fCF_Domain_verify` 
  },
  plugins: [
    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "UA-163532894-1",
        head: true,
        anonymize: true
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/_data`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [{
          resolve: `gatsby-remark-prismjs`,
          options: {
            classPrefix: "language-",
            inlineCodeMarker: null,
            aliases: {},
            showLineNumbers: false,
            noInlineHighlight: false,
          },
        },
        {
          resolve: 'gatsby-remark-emojis',
        }],
      },
    },
    `gatsby-plugin-sass`, 
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-netlify-cms`,
    {
    resolve: `gatsby-source-airtable`,
    options: {
      apiKey: `YOUR KEY`, // may instead specify via env, see below
      concurrency: 5, // default, see using markdown and attachments for more information
      tables: [
        {
          baseId: `YOUR BASE ID`,
          tableName: `Wszystkie biznesy`,
          mapping: {"Logo": "fileNode"}
        }
      ]
    }
  }
  ],
}
