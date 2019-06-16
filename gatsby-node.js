const path = require('path')

module.exports.onCreateNode = ({ node, actions }) => {
    const { createNodeField } = actions

    if (node.internal.type === 'MarkdownRemark'){
        const slug = path.basename(node.fileAbsolutePath, '.md')
        
        createNodeField ({
            node,
            name:'slug',
            value: slug
        })

    }      
    // Transform the new node here and create a new node or
    // create a new node field.
  }
  module.exports.createPages = async({ graphql, actions}) => {
        const {createPage} = actions
        const pageTemplate = path.resolve(`./src/templates/page.js`)
        const categoryTemplate = path.resolve(`./src/templates/category.js`)
        const subCategoryTemplate = path.resolve(`./src/templates/subcategory.js`)
        const res = await graphql(`
            query{
                allMarkdownRemark {
                    edges {
                        node{
                            fields{
                                slug
                            }
                            frontmatter{
                                categorySlug
                                subcategorySlug
                                featuredImage
                            }
                        }
                    }
                }
            }
        `)

        // res.data.allMarkdownRemark.edges.forEach((edge) =>{
        //     createPage({
        //         component:blogTemplate,
        //         path: `/blog/${edge.node.fields.slug}`,
        //         context:{
        //             slug: edge.node.fields.slug
        //         }
        //     })
        // })
        res.data.allMarkdownRemark.edges.forEach((edge) =>{
            let path;
            let component;
            let category = edge.node.frontmatter.categorySlug;
            let subcategory = edge.node.frontmatter.subcategorySlug;
            let slug = edge.node.fields.slug;
            //path for category page
            if(category === slug){
                path = `/${category}` ;
                component = categoryTemplate;
            } 
            //path for subcategory page
            else if(subcategory === slug){
                path = `/${category}/${subcategory}`;
                component = subCategoryTemplate;
            } 
            //path for blog posts and page
            else{
                path = `/${category}/${subcategory}/${slug}`;
                component = pageTemplate;
            }
            
            createPage({
                component:component,
                path: path,
                context:{
                    slug: edge.node.fields.slug,
                    categorySlug: edge.node.frontmatter.categorySlug,
                    subcategorySlug: edge.node.frontmatter.subcategorySlug,
                    featuredImage: edge.node.frontmatter.featuredImage
                   
                }
            })
        })
  }