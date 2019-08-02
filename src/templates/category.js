import React from 'react'
import {graphql, Link} from 'gatsby'

import Head from '../components/head'
import pageStyles from '../styles/page.module.scss'
import Layout from '../components/layout'
//import {documentToReactComponents} from '@contentful/rich-text-react-renderer'

export const query = graphql`
    query ($slug:String!, $categorySlug:String!){
        markdownRemark (
            fields:{
                slug:{
                    eq: $slug
                }
            }
        ){
            excerpt
            frontmatter{
                category
                categorySlug
                subcategory
                subcategorySlug
                title
                featuredImage
                
            }
            html
            fields{
                slug
            }
        }
        allMarkdownRemark(
            filter: {
                frontmatter:{
                    categorySlug:{
                        eq:$categorySlug
                    },
                    subcategory:{
                        ne:""
                    },
                    order:{
                        eq:null
                    }
                }
            }
            sort: {
                fields: [frontmatter___indexOrder]
                order: ASC
            }
        ) {
            edges {
                node{
                    fields{
                        slug
                    }
                    frontmatter{
                        categorySlug
                        title                        				
                    }
                }
            }
        }
        file(
            extension: { 
                eq: "jpg" 
            }
            name: {
                eq: $categorySlug
            }
        ){
            publicURL
        }
    }
`

const TemplatePage = (props) => {
    // const options = {
    // //render images from contentful
    //     renderNode: {
    //         "embedded-asset-block": (node) => {
    //             const alt = node.data.target.fields.title['en-US']
    //             const url= node.data.target.fields.file['en-US'].url
    //             return <img alt={alt} src={url}/>
    //         }
    //     }
    // }

    
    return (
        <Layout>

            <Head 
                    title = {props.data.markdownRemark.frontmatter.title}
                    description = {props.data.markdownRemark.excerpt}
                    featuredImage = {props.data.file.publicURL}
                    url = {`${props.data.markdownRemark.frontmatter.categorySlug}`}
            />

            <div className={pageStyles.breadCrumb}>
                <p>
                    <Link to={`/${props.data.markdownRemark.frontmatter.categorySlug}/`}>
                            {props.data.markdownRemark.frontmatter.category}
                    </Link>                   
                </p>        
            </div>

            <div className={pageStyles.header}>    
            <h1>{props.data.markdownRemark.frontmatter.title}</h1>
            </div>

            <div className ={pageStyles.content} dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html}}></div>
            
            <div className ={pageStyles.content}>

            {props.data.allMarkdownRemark.edges.map((edge) => {
                return(
                    <ul>
                        <li><Link to={`/${edge.node.frontmatter.categorySlug}/${edge.node.fields.slug}`}>{edge.node.frontmatter.title}</Link></li>
                    </ul>
                )
            })}
            
            </div>
            

        </Layout>
    )

}

export default TemplatePage
