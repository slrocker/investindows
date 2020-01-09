import React from 'react'

import Header from '../components/header'
import Nav from '../components/nav'
import Footer from '../components/footer'

import '../styles/main.scss'
import layoutStyles from '../styles/layout.module.scss'

import GoogleAd from './adsense'

const Layout = (props) => {
    return (
        <div className={layoutStyles.container}>
            <div className={layoutStyles.content}>
                <Header />
                <Nav />
                {props.children}
            </div>
        <GoogleAd client="ca-pub-4815974767842427" slot="8542001479" />            
        <Footer />
        </div>        
    )
}

export default Layout
