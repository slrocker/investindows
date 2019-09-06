
import React from 'react'
import {graphql, Link} from 'gatsby'


import Head from '../components/head'



import pageStyles from '../styles/page.module.scss'
import Layout from '../components/layout'
import "katex/dist/katex.min.css"

export const query = graphql `
    query ($slug: String!, $featuredImage: String!, $title: String!) {
        markdownRemark( fields: { slug: {eq: $slug } }) {
            excerpt
            frontmatter{
                title
                date
                section
                sectionSlug
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
        
        allMarkdownRemark(
            filter: {
              	frontmatter:{
                    title:{
                        eq:$title
                    },
                  }
            }
      	) {
            edges {
            node {
                headings{
                        value
                        depth
                }
                
            }
            }
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
                        <span>></span>
                        <Link to={`/${props.data.markdownRemark.frontmatter.categorySlug}/${props.data.markdownRemark.frontmatter.subcategorySlug}/`}>
                            {props.data.markdownRemark.frontmatter.subcategory}
                        </Link>
                        <span>></span>
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
                    <Link to={`/${props.data.markdownRemark.frontmatter.sectionSlug}/`}>
                        {props.data.markdownRemark.frontmatter.section}
                    </Link>
                    <span>></span>
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

            <div className={pageStyles.toc}>
                <p>CONTEÚDO</p>
                <ul>
                    {props.data.allMarkdownRemark.edges.map( edge => edge.node.headings.map((heading) => {
                        
                        if (heading.depth === 3){
                            return(
                            
                            <li className={pageStyles.depth3}><a href={`#${heading.value.replace(/\s/g,"-").replace(/[!?.()]/g,"").toLowerCase()}`}>{heading.value}</a></li>
                            
                            )              

                        }
                        if (heading.depth === 4){
                            return(
                            
                            <li className={pageStyles.depth4}><a href={`#${heading.value.replace(/\s/g,"-").replace(/[!?./()]/g,"").toLowerCase()}`}>{heading.value}</a></li>
                            
                            )              

                        }
                        return(
                            
                                <li><a href={`#${heading.value.replace(/\s/g,"-").replace(/[!?./())]/g,"").toLowerCase()}`}>{heading.value}</a></li>
                            
                        )}
                    ))}
                </ul>
            </div>

            <div className={pageStyles.header}>
            <h1>{props.data.markdownRemark.frontmatter.title}</h1>
            </div>

            <div className={pageStyles.content} dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html}}></div>

            
            
        </Layout>
    )
}

export default TemplatePage
