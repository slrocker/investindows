import React from "react"
import { Link } from 'gatsby'

import headerStyles from '../styles/header.module.scss'

const Header = () => {
    return (
        <header className={headerStyles.headerContainer}>
            <h1><Link to='/'>INVE$TINDO</Link></h1>
            <h3>Aprenda a investir de forma simples e rápida!</h3>
            <section id="search">
                <form>
                    <input type="search" name="search" size="" placeholder="O que você quer saber?" required/>
                    <input type="submit" value="" className={headerStyles.submitSearch} />
                </form>
            </section>
         </header>        
    )
}

export default Header
