import React from "react"
import { Link } from 'gatsby'

import headerStyles from '../styles/header.module.scss'

const Header = () => {
    return (
        <header className={headerStyles.headerContainer}>
            <h1><Link to='/'>INVESTINDO</Link></h1>
            <h3>Aprenda a investir de forma simples e rápida!</h3>
         </header>        
    )
}

export default Header
