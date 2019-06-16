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
                    fields: [frontmatter___category, frontmatter___subcategory]
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
                <ul>
                    {data.itens.edges.map((edge) => {
                        return(
                            <li>
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
