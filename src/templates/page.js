import React from 'react'
import {graphql, Link} from 'gatsby'

import Head from '../components/head'

import pageStyles from '../styles/page.module.scss'
import Layout from '../components/layout'


export const query = graphql `
    query ($slug: String!, $featuredImage: String!) {
        markdownRemark( fields: { slug: {eq: $slug } }) {
            excerpt
            frontmatter{
                title
                date
                category
                categorySlug
                subcategory
                subcategorySlug
                
                
            }
            html
            fields{
                slug
            }
        }
        file(
            extension: { 
                eq: "jpg" 
            }
            name: {
                eq: $featuredImage
            }
        ){
            publicURL
        }        
    }
`



const TemplatePage = (props) => {

  
    
    //const featuredImage = props.data.pageFeaturedImage.publicURL ? props.data.pageFeaturedImage.publicURL : props.data.categoryFeaturedImage.publicURL ; 
    //const featuredImage = props.data.pageFeaturedImage.publicURL || props.data.categoryFeaturedImage.publicURL || "/" ;

    //render blog posts
    if(props.data.markdownRemark.frontmatter.category === "Blog"){

        return(
            <Layout>

               
                <Head 
                    title = {props.data.markdownRemark.frontmatter.title}
                    description = {props.data.markdownRemark.excerpt}
                    featuredImage = {props.data.file.publicURL}
                    url = {`${props.data.markdownRemark.frontmatter.categorySlug}/${props.data.markdownRemark.frontmatter.subcategorySlug}/${props.data.markdownRemark.fields.slug}`}
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
                    <p>{props.data.markdownRemark.frontmatter.date}</p>
                </div>

                
                <div className={pageStyles.content} dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html}}></div>
                
            </Layout>
        )
    }
    //render pages
    return (
        <Layout>

            <Head 
                    title = {props.data.markdownRemark.frontmatter.title}
                    description = {props.data.markdownRemark.excerpt}
                    featuredImage = {props.data.file.publicURL}
                    url = {`${props.data.markdownRemark.frontmatter.categorySlug}/${props.data.markdownRemark.frontmatter.subcategorySlug}/${props.data.markdownRemark.fields.slug}`}
            />

            <div className={pageStyles.breadCrumb}>
                <p>
                    <Link to={`/${props.data.markdownRemark.frontmatter.categorySlug}/`}>
                            {props.data.markdownRemark.frontmatter.category}
                    </Link>
                     <span>></span>
                    <Link to={`/${props.data.markdownRemark.frontmatter.categorySlug}/${props.data.markdownRemark.frontmatter.subcategorySlug}/`}>
                           {props.data.markdownRemark.frontmatter.subcategory}
                    </Link>
                    <span>></span>
                </p>        
            </div>

            <div className={pageStyles.header}>
            <h1>{props.data.markdownRemark.frontmatter.title}</h1>
            </div>

            <div className={pageStyles.content} dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html}}></div>
            
        </Layout>
    )
}

export default TemplatePage
