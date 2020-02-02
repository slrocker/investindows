import React from 'react'
import { Link } from 'gatsby'
import { ModalRoutingContext } from 'gatsby-plugin-modal-routing'



import Layout from '../components/layout'


import SearchComponent from '../components/search-component'
import SearchStyles from '../styles/search.module.scss'



const ModalExamplePage = () => (



  <ModalRoutingContext.Consumer>

  

    {({ modal, closeTo }) => (
      <div>
        {modal ? (
          <div>
            <Link to={closeTo} className={SearchStyles.closeButton}>
                Fechar
                
              </Link>
            <div className={SearchStyles.modalContainer}>            
              <SearchComponent />
            </div>
          </div>
        ) : (

          <Layout>
           
            <h1>Busca</h1>
            <SearchComponent />
          </Layout>
          
            
          
        )}      
      </div>
    )}
  </ModalRoutingContext.Consumer>
)

export default ModalExamplePage