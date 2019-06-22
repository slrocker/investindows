import React from 'react'
import {graphql, Link, useStaticQuery} from 'gatsby'


import Layout from '../components/layout'
import Head from '../components/head'



const IndexPage = () => {

    const data = useStaticQuery (graphql `
    query {
        file(
            extension: { 
                eq: "jpg" 
            }
            name: {
                eq: "index-featured"
            }
        ){
            publicURL
        }
        itens: allMarkdownRemark (
            filter:{
            frontmatter: {
                    showIndex: {
                eq: "true"
                }
            }
            }
            sort: {
                    fields: [frontmatter___indexOrder, frontmatter___subcategorySlug]
                    order: ASC
                    }
        ) {
            edges {
                node{
                    fields{
                        slug
                    }
                    frontmatter{
                        title
                        categorySlug
                        subcategorySlug
                        pageType
                        icon
                    }
                }
            }
        }
                
    }
`)
    
    return (
        <Layout>
            <Head 
                title = "Home" 
                description = "Aprenda a investir em renda variável, renda fixa, fundos e outros ativos financeiros de forma simples e rápida."
                featuredImage = {data.file.publicURL}
                url = ""
            />

            <p>teste.</p>
            <div>
                <ul className="indexMenu">
                    {data.itens.edges.map((edge) => {
                        return(
                            <li className = {`${edge.node.frontmatter.categorySlug} ${edge.node.frontmatter.pageType}`}> 
                                <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" className = {`${edge.node.frontmatter.categorySlug} ${edge.node.frontmatter.pageType}`}>
                                        <path d={edge.node.frontmatter.icon} />
                                </svg>                  
                                 <Link
                                    to={`${edge.node.frontmatter.categorySlug}/${edge.node.frontmatter.subcategorySlug}`}
                                    className = {`${edge.node.frontmatter.categorySlug} ${edge.node.frontmatter.pageType}`}
                                >
                                    
                                    {edge.node.frontmatter.title}
                                </Link>
                            </li>
                            
                        )
                    })}
                </ul>
            </div>
        </Layout>
    )
}

export default IndexPage
