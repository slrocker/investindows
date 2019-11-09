import React from 'react'
import { Link, graphql, useStaticQuery} from 'gatsby'


import Head from '../components/head'
import Layout from '../components/layout'
import sobreStyles from '../styles/sobre.module.scss'





const TermoPage = () => {

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
                title = "Sobre" 
                description = "Sobre o site do www.investindo.org."
                featuredImage = {data.file.publicURL}
                url = ""
            />

            <div className={sobreStyles.content}>

            
                <h1 className={sobreStyles.title}>Sobre o Investindo.org</h1>
                
                <p>Investindo.org é um site de objetivo educacional, que busca fornecer conhecimentos de economia e investimentos no mercado financeiro ao pequeno investidor, sempre com linguagem acessível e abordagem prática. </p>
                <p>Antes de utilizar este website e seu conteúdo, conheça o <Link to="/termo-de-uso">Termo de Uso</Link> e a <Link to="/politica-de-privacidade">Política de Privacidade</Link>.</p>


                <h3>O Autor</h3>


                <p>Eric Dornelas, proprietário e autor do conteúdo do website Investindo.org, é formado em Administração e Ciências Aeronáuticas pela Academia da Força Aérea Brasileira. </p>



                <p>Em 2009 iniciou seu caminho no mundo dos investimentos, começando pelos Fundos de Investimento e mais tarde se aprofundando na Renda Variável.</p>



                <p>Desde o começo se interessou muito pelo tema se dedicando a leitura de livros, cursos e muito estudo sobre o mercado financeiro. Com o tempo, percebeu que seus amigos e familiares, assim como as pessoas em geral, ainda tinham dúvidas muito básicas sobre investimentos e que havia uma falta de ensinamentos realmente práticos sobre o assunto.</p>



                <p>Com isso em mente, escreveu o livro <em><Link to="/livros">Aprenda a Investir no Mercado Financeiro</Link></em>, com uma abordagem simples e prática de como investir em ativos financeiros em geral.</p>



                <p>O site Investindo.org surgiu como um complemento ao livro buscando aumentar o alcance e as possibilidades de transmissão das informações.</p>



                <p>Sempre em busca da melhoria contínua o autor segue estudando
                e aprendendo cada vez mais, procurando digerir os assuntos e proporcionar mais
                conhecimento de forma simples e rápida para cada vez mais pessoas, buscando
                assim possibilitar que mais brasileiros possam investir com segurança, colher
                os frutos de seus esforços e ajudar a tornar o Brasil um país melhor.</p>


                
            </div>
            
        </Layout>
    )
}

export default TermoPage