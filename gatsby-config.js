/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata:{
    title: 'INVESTINDO',
    author: 'Eric Dornelas',
    email:'contato@investindo.org',
    facebook:'http://www.facebook.com/investindoWS/',
    twitter:'http://www.twitter.com/InvestindoOrg/',
    youtube:'http://youtube.com/+InvestindoOrgWS',
    url:'http://www.investindo.org'

  },
  plugins:[
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
