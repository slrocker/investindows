import React from 'react'
import {graphql, Link, useStaticQuery} from 'gatsby'


import Layout from '../components/layout'
import Head from '../components/head'
import indexStyles from '../styles/index.module.scss'



const IndexPage = () => {

    const data = useStaticQuery (graphql `
    query {
        file(
            extension: { 
                eq: "jpg" 
            }
            name: {
                eq: "general-featured"
            }
        ){
            publicURL
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

            <ol className={indexStyles.itens}>
                <li className={indexStyles.item}>
                            <Link to="/aprenda">
                                <h1>Aprenda</h1>
                                <p>Tudo o que você precisa saber para começar a investir.</p>
                            </Link>
                </li>
                <li className={indexStyles.item}>
                            <Link to="/planilhas">
                                <h1>Planilhas</h1>
                                <p>Planilhas para controle de investimentos.</p>
                            </Link>
                </li>  
                <li className={indexStyles.item}>
                            <Link to="/blog">
                                <h1>Blog</h1>
                                <p>Artigos sobre economia, finanças e investimentos.</p>
                            </Link>
                </li>  
                <li className={indexStyles.item}>
                            <Link to="/livros">
                                <h1>Livros</h1>
                                <p>Livros escritos pelo autor do Investindo.org.</p>
                            </Link>
                </li>  
                <li className={indexStyles.item}>
                            <Link to="/enciclopedia">
                                <h1>Enciclopédia</h1>
                                <p>Em dúvida sobre algo? Dê uma olhada na nossa enciclopédia.</p>
                            </Link>
                </li>
                {/* <li className={indexStyles.item}>
                            <Link to="/dados">
                                <h1>Dados</h1>
                                <p>Informações financeiras das empresas listadas em Bolsa.</p>
                            </Link>
                </li>         */}
                
            </ol>

        </Layout>
    )
}

export default IndexPage
