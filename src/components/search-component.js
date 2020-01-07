
import React from 'react'
import algoliasearch from 'algoliasearch/lite'
import {
  Configure,
  connectHits,
  connectPagination,
  connectSearchBox,
  connectStateResults,
  Highlight,
  InstantSearch
} from 'react-instantsearch-dom'

import {Link} from 'gatsby'

import SearchStyles from '../styles/search.module.scss'

const searchClient = algoliasearch(
  process.env.GATSBY_ALGOLIA_APP_ID,
  process.env.GATSBY_ALGOLIA_SEARCH_KEY
)

const SearchBox = connectSearchBox(({ currentRefinement, refine }) => {
  return (
    <div className={SearchStyles.searchForm}>
      <label htmlFor="search">O que você quer saber?</label>
      <input       
        id="search"
        name="search"        
        onChange={event => refine(event.currentTarget.value)}
        type="search"
        value={currentRefinement}
      />
    </div>
  )
})

// Please note, that to get the `css` prop to work, you'll either
// need to add a jsx pragma or use a babel plugin. Consult the
// Emotion documentation for setting that up for your project.


const Hits = connectHits(({ hits }) => (
  <div className={SearchStyles.results}>
    {/* Always use a ternary when coercing an array length */}
    {/* otherwise you might print out "0" to your UI */}
    {hits.length ? (
      <>
        
        {hits.map(hit => {
          return (
            <div  key={hit.objectID}>
              <Link to={`${hit.sectionSlug}/${hit.categorySlug}/${hit.subcategorySlug}/${hit.fields.slug}`} >
                <h4>
                  {hit.title}
                                 
                </h4>                
              </Link>
              <div className={SearchStyles.excerpt}>
                {hit.excerpt}
              </div>
              
            </div>
          )
        })}
      </>
    ) : (
      <p className={SearchStyles.noResultText}>Nenhum resultado encontrado.</p>
    )}
  </div>
))



export default function Search() {
  return (
    <InstantSearch
      indexName={process.env.GATSBY_ALGOLIA_INDEX_NAME}
      searchClient={searchClient}
    >
      <SearchBox />
      <Hits />
    </InstantSearch>
  )
}