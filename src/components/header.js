import React from "react"
import { Link } from 'gatsby'
import SearchButton from '../components/search-button'

import headerStyles from '../styles/header.module.scss'


const Header = () => {
    return (
        <header className={headerStyles.headerContainer}>
            <h1><Link to='/'>INVE$TINDO</Link></h1>
            <h3>Aprenda a investir de forma simples e rápida!</h3>
            <SearchButton />
         </header>        
    )
}

export default Header
