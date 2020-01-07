const markDownQuery = `
        query{
            allMarkdownRemark(
                filter: {
                    frontmatter:{
                        pageType:{
                            eq:"page"
                        }
                    }
                }
            ) {
                edges {
                    node{
                        
                        fields{
                            slug
                        }
                        excerpt(pruneLength: 280)
                        frontmatter{
                            sectionSlug
                            section
                            categorySlug
                            category
                            subcategorySlug
                            subcategory
                            title                        				
                            date
                            
                        }
                    }
                }
            }
            
        }
    
    `

    const unnestFrontmatter = node => {
        const { frontmatter, ...rest } = node
      
        return {
          ...frontmatter,
          ...rest
        }
      }
      
      const queries = [
        {
          query: markDownQuery,
          transformer: ({ data }) =>
            data.allMarkdownRemark.edges.map(edge => edge.node).map(unnestFrontmatter)
        }
      ]
      
      module.exports = queries