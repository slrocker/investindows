import React from 'react'
import {graphql, Link} from 'gatsby'

import pageStyles from '../styles/page.module.scss'
import Layout from '../components/layout'
import {documentToReactComponents} from '@contentful/rich-text-react-renderer'

export const query = graphql`
    query($slug:String!, $categorySlug:String!){
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
        allContentfulPageTemplate (
            filter:{
                categorySlug:{eq:$categorySlug},
                subcategory:{ne:null},
                order:{ne:null}
            }
            sort: {
                fields:order,
                order:ASC
            }
        ){
            edges{
                node{
                    title
                    categorySlug
                    subcategorySlug
                    slug
                    order
                }
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
                </h3>        
            </div>

            <div className={pageStyles.header}>    
            <h1>{props.data.contentfulPageTemplate.title}</h1>
            </div>

            <div className={pageStyles.content}>
            {documentToReactComponents(props.data.contentfulPageTemplate.body.json, options)}
            
            {props.data.allContentfulPageTemplate.edges.map((edge) => {
                return(
                    <ol>
                        <li><Link to={`/${edge.node.categorySlug}/${edge.node.subcategorySlug}/${edge.node.slug}`}>{edge.node.title}</Link></li>
                    </ol>
                )
            })}
            </div>

        </Layout>
    )

}

export default TemplatePage
