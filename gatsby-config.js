
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const queries = require('./src/utils/algolia')

module.exports = {
  siteMetadata:{
    title: 'INVESTINDO',
    author: 'Eric Dornelas',
    email:'contato@investindo.org',
    facebook:'http://www.facebook.com/investindoWS/',
    twitter:'http://www.twitter.com/InvestindoOrg/',
    youtube:'http://youtube.com/+InvestindoOrgWS',
    url:'https://www.investindo.org',
    siteUrl:'https://www.investindo.org'

  },
  plugins:[
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: process.env.ANALYTICS_TRACKING_ID,
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true
      },
    },
    'gatsby-plugin-recaptcha',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-modal-routing',
    {
      resolve: 'gatsby-plugin-algolia',
      options: {
        appId: process.env.GATSBY_ALGOLIA_APP_ID,
        apiKey: process.env.GATSBY_ALGOLIA_ADMIN_KEY,
        indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME,
        queries,
        chunkSize: 10000
      }
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
      }
    },
    'gatsby-plugin-sass',
    {
      resolve:'gatsby-source-filesystem',
      options:{
          name:'src',
          path:`${__dirname}/src/`
      }
    },
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          { resolve: 'gatsby-remark-autolink-headers',
            options:{
              icon: false
            }
          },
          'gatsby-remark-relative-images',
          {
            resolve: 'gatsby-remark-images',
            options:{
              maxWidth: 800,
              linkImagesToOriginal: false
            }
          },
          {
            resolve: 'gatsby-remark-graph',
            options: {
              language: 'mermaid',
              theme: 'neutral'
            }
          },
          {
            resolve: 'gatsby-remark-katex',
            options: {
              displayMode: true,
              strict: 'ignore'

            }
          }
        ]  //    
      }
    }
  ]
}
