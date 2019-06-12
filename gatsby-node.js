const path = require('path')

// module.exports.onCreateNode = ({ node, actions }) => {
//     const { createNodeField } = actions

//     if (node.internal.type === 'MarkdownRemark'){
//         const slug = path.basename(node.fileAbsolutePath, '.md')
        
//         createNodeField ({
//             node,
//             name:'slug',
//             value: slug
//         })

//     }      
//     // Transform the new node here and create a new node or
//     // create a new node field.
//   }
  module.exports.createPages = async({ graphql, actions}) => {
        const {createPage} = actions
        const pageTemplate = path.resolve(`./src/templates/page.js`)
        const categoryTemplate = path.resolve(`./src/templates/category.js`)
        const subCategoryTemplate = path.resolve(`./src/templates/subcategory.js`)
        const res = await graphql(`
            query{
                allContentfulPageTemplate{
                    edges{
                        node{
                            categorySlug
                            subcategorySlug
                            slug
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
        res.data.allContentfulPageTemplate.edges.forEach((edge) =>{
            let path;
            let component;
            //path for category page
            if(edge.node.categorySlug === edge.node.slug){
                path = `/${edge.node.categorySlug}` ;
                component = categoryTemplate;
            } 
            //path for subcategory page
            else if(edge.node.subcategorySlug === edge.node.slug){
                path = `/${edge.node.categorySlug}/${edge.node.subcategorySlug}`;
                component = subCategoryTemplate;
            } 
            //path for blog posts and page
            else{
                path = `/${edge.node.categorySlug}/${edge.node.subcategorySlug}/${edge.node.slug}`;
                component = pageTemplate;
            }
            
            createPage({
                component:component,
                path: path,
                //path: `/${edge.node.categorySlug}/${edge.node.subcategorySlug}/${edge.node.slug}`,
                context:{
                    slug: edge.node.slug,
                    categorySlug: edge.node.categorySlug,
                    subcategorySlug: edge.node.subcategorySlug
                }
            })
        })
  }