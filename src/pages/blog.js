import React from 'react'
import { Link, graphql, useStaticQuery} from 'gatsby'

import Layout from '../components/layout'
import blogStyles from '../styles/blog.module.scss'

const BlogPage = () => {

    const data = useStaticQuery (graphql`
        query{
            allContentfulPageTemplate(
            filter:{
                category:{
                eq: "Blog"
                }
            }
                sort: {
                fields:publishedDate,
                order:DESC
            }
            ){
                edges{
                    node{
                        categorySlug
                        subcategorySlug
                        title
                        slug
                        publishedDate (formatString: "Do MMMM, YYYY")
                        
                    }
                }
            }
        }
    
    `)

    return (
        <Layout>
            <h1>Blog</h1>
            <ol className={blogStyles.posts}>
                {data.allContentfulPageTemplate.edges.map((edge) => {
                    return(
                        <li className={blogStyles.post}>
                            <Link to={`/${edge.node.categorySlug}/${edge.node.subcategorySlug}/${edge.node.slug}`}>
                                <h3>{edge.node.title}</h3>
                                <p>{edge.node.publishedDate}</p>
                            </Link>
                        </li>  
                    )
                })}
            </ol>
        </Layout>
    )
}

export default BlogPage