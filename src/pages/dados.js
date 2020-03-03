import React from 'react'
import { Link, graphql, useStaticQuery} from 'gatsby'


import Head from '../components/head'
import Layout from '../components/layout'
import dadosStyles from '../styles/dados.module.scss'





const DadosPage = () => {

    const data = useStaticQuery (graphql `
    query {
        file(
            extension: { 
                eq: "jpg" 
            }
            name: {
                eq: "dados-featured"
            }
        ){
            publicURL
        }
        itens: allMarkdownRemark (
            filter:{
            frontmatter: {
                    pageType: {
                        ne: "page"
                    }
                    sectionSlug: {
                        eq: "dados"
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
                        sectionSlug
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
                title = "Dados" 
                description = "Informações fianceiras das empresas negociadas em Bolsa de Valores."
                featuredImage = {data.file.publicURL}
                url = ""
            />
            <h1 className={dadosStyles.title}>Dados</h1>
            <p className={dadosStyles.subtitle}>Informações financeiras das empresas listadas em Bolsa.</p>
            <div className ={dadosStyles.content}>
                
                    
                    {data.itens.edges.map((edge) => {

                        if(edge.node.frontmatter.subcategorySlug === ""){

                            return (
                                
                                <h3 className = {dadosStyles.categoryTitle}>             
                                    <Link
                                        to={`${edge.node.frontmatter.sectionSlug}/${edge.node.frontmatter.categorySlug}`}
                                        className = {dadosStyles.categoryLink}
                                    >
                                        
                                        {edge.node.frontmatter.title}
                                    </Link>
                                </h3>
                            )

                        }
                        return(
                            
                            <p className = {dadosStyles.subcategoryTitle}>            
                                 <Link
                                    to={`${edge.node.frontmatter.sectionSlug}/${edge.node.frontmatter.categorySlug}/${edge.node.frontmatter.subcategorySlug}`}
                                    className = {dadosStyles.subcategoryLink}
                                >
                                    
                                    {edge.node.frontmatter.title}
                                </Link>
                            </p>
                            
                        )
                    })}
                
            </div>
        </Layout>
    )
}

export default DadosPage