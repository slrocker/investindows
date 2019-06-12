import React from 'react'
import {graphql, Link} from 'gatsby'

import pageStyles from '../styles/page.module.scss'
import Layout from '../components/layout'
import {documentToReactComponents} from '@contentful/rich-text-react-renderer'

// export const query = graphql `
//     query ($slug: String!) {
//         markdownRemark( fields: { slug: {eq: $slug } }) {
//             frontmatter{
//                 title
//                 date
//             }
//             html
//         }
//     }
// `

export const query = graphql`
    query($slug:String!){
        contentfulPageTemplate (slug: {eq: $slug}) {
            category
            categorySlug
            subcategory
            subcategorySlug
            title
            publishedDate (formatString: "Do MMMM, YYYY")
            body {
                json
            }
        }
    }
`

const TemplatePage = (props) => {
    const options = {
    //render images from contentful
        renderNode: {
            "embedded-asset-block": (node) => {
                const alt = node.data.target.fields.title['en-US']
                const url= node.data.target.fields.file['en-US'].url
                return <img alt={alt} src={url}/>
            }
        }
    }
    //render blog posts
    if(props.data.contentfulPageTemplate.category === "Blog"){
        return(
            <Layout>

                <div className={pageStyles.breadCrumb}>
                    <h1>
                        <Link to={`/${props.data.contentfulPageTemplate.categorySlug}/`}>
                          {props.data.contentfulPageTemplate.category}
                        </Link>
                    </h1>
                </div>

                <div className={pageStyles.header}>
                    <h1>{props.data.contentfulPageTemplate.title}</h1>
                    <p>{props.data.contentfulPageTemplate.publishedDate}</p>
                </div>

                <div className={pageStyles.content}>
                    {documentToReactComponents(props.data.contentfulPageTemplate.body.json, options)}
                </div>

            </Layout>
        )
    }
    //render pages
    return (
        <Layout>
            <div className={pageStyles.breadCrumb}>
                <h3>
                    <Link to={`/${props.data.contentfulPageTemplate.categorySlug}/`}>
                            {props.data.contentfulPageTemplate.category}
                    </Link>
                     <span>></span>
                    <Link to={`/${props.data.contentfulPageTemplate.categorySlug}/${props.data.contentfulPageTemplate.subcategorySlug}/`}>
                           {props.data.contentfulPageTemplate.subcategory}
                    </Link>
                    <span>></span>
                </h3>        
            </div>

            <div className={pageStyles.header}>
            <h1>{props.data.contentfulPageTemplate.title}</h1>
            </div>

            <div className={pageStyles.content}>
            {documentToReactComponents(props.data.contentfulPageTemplate.body.json, options)}
            </div>
            
        </Layout>
    )
}

export default TemplatePage
