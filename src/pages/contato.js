import React from 'react'
import { Link, graphql, useStaticQuery} from 'gatsby'


import Head from '../components/head'
import Layout from '../components/layout'
import contatoStyles from '../styles/contato.module.scss'






const ContatoPage = () => {

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
                title = "Contato" 
                description = "Entre em contato com o Investindo.org."
                featuredImage = {data.file.publicURL}
                url = ""
            />
            <h1 className={contatoStyles.title}>Contato</h1>
            <p className={contatoStyles.subtitle}>Entre em contato com Investindo.org.</p>
            <p>*Todos os campos são obrigatórios.</p>
            <div className={contatoStyles.content}>
                <form name="contato" method="post" data-netlify="true" action="/agradecimento">
                <input type="hidden" name="form-name" value="contato" />
                <div>
                    <label for="email">Seu Email:</label>
                    <input type="email" name="email" />
                </div>
                <div>
                    <label>Mensagem:</label>
                    <textarea name="message" />
                </div>
                
                <button type="submit">Enviar</button>
                </form>
            </div>
        </Layout>
    )
}

export default ContatoPage