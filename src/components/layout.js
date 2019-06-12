import React from 'react'

import Header from '../components/header'
import Nav from '../components/nav'
import Footer from '../components/footer'

import '../styles/index.scss'
import layoutStyles from '../styles/layout.module.scss'

const Layout = (props) => {
    return (
        <div className={layoutStyles.container}>
            <div className={layoutStyles.content}>
                <Header />
                <Nav />
                {props.children}
            </div>        
        <Footer />
        </div>        
    )
}

export default Layout
