import React from 'react'
import { Link } from 'gatsby'


import navStyles from '../styles/nav.module.scss'

const Nav = () => {
    return(
        <nav className={navStyles.navContainer}>
            <ul>
                <li><Link to='/finance' className={navStyles.navLink}>Finanças</Link></li>
                <li><Link to='/renda-fixa' className={navStyles.navLink}>Renda Fixa</Link></li>
                <li><Link to='/renda-variavel' className={navStyles.navLink}>Renda Variável</Link></li>
                <li><Link to='/fundos' className={navStyles.navLink}>Fundos de Investimento</Link></li>
                <li><Link to='/imposto-de-renda' className={navStyles.navLink}>Imposto de Renda</Link></li>           
            </ul>
        </nav>
    )
}

export default Nav