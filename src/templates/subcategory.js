import React from 'react'
import {graphql, Link} from 'gatsby'

import Head from '../components/head'
import pageStyles from '../styles/page.module.scss'
import Layout from '../components/layout'
//import {documentToReactComponents} from '@contentful/rich-text-react-renderer'

export const query = graphql`
    query ($slug:String!, $categorySlug:String!, $subcategorySlug:String!){
        markdownRemark (
            fields:{
                slug:{
                    eq: $slug
                }
            }
        ){
            excerpt
            frontmatter{
                section
                sectionSlug
                category
                categorySlug
                subcategory
                subcategorySlug
                title
            }
            fields{
                slug
            }
            html
        }
        allMarkdownRemark(
            filter: {
                frontmatter:{
                    categorySlug:{
                        eq:$categorySlug
                    },
                    subcategorySlug:{
                        eq:$subcategorySlug
                    },
                    order:{
                        ne:null
                        
                    }
                }
            }
            sort: {
                fields: [frontmatter___order]
                order: ASC
            }
        ) {
            edges {
                node{
                    fields{
                        slug
                    }
                    frontmatter{
                        sectionSlug
                        categorySlug
                        subcategorySlug
                        title 
                        order                       				
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

const subCategoryPage = (props) => {
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
                    url = {`${props.data.markdownRemark.sectionSlug}/${props.data.markdownRemark.frontmatter.categorySlug}/${props.data.markdownRemark.fields.slug}`}
            />

            <div className={pageStyles.breadCrumb}>
                <p>
                    <Link to={`/${props.data.markdownRemark.frontmatter.sectionSlug}/`}>
                            {props.data.markdownRemark.frontmatter.section}
                    </Link>
                    <span>></span>
                    <Link to={`${props.data.markdownRemark.frontmatter.sectionSlug}/${props.data.markdownRemark.frontmatter.categorySlug}/`}>
                            {props.data.markdownRemark.frontmatter.category}
                    </Link>
                    <span>></span>
                    
                </p>        
            </div>

            <div className={pageStyles.header}>    
            <h1>{props.data.markdownRemark.frontmatter.title}</h1>
            </div>

            <div className={pageStyles.content} dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html}}></div>
            
            <div className={pageStyles.content}>
            <ol>
            {props.data.allMarkdownRemark.edges.map((edge) => {
                return(
                    
                        <li>
                            <Link to={`${props.data.markdownRemark.frontmatter.sectionSlug}/${edge.node.frontmatter.categorySlug}/${edge.node.frontmatter.subcategorySlug}/${edge.node.fields.slug}`}>
                                {edge.node.frontmatter.title}
                            </Link>
                        </li>
                    
                )
            })}
            </ol>

            </div>

        </Layout>
    )

}

export default subCategoryPage
