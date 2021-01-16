import React from 'react'
import { Link } from 'gatsby'


import navStyles from '../styles/nav.module.scss'

const Nav = () => {
    return(
        <div>
        
        <input type="checkbox" className={navStyles.openSidebarMenu} id="openSidebarMenu" />
        <label for="openSidebarMenu" className={navStyles.sidebarIconToggle}>
            <div className={`${navStyles.spinner} ${navStyles.diagonal} ${navStyles.part1}`}></div>
            <div className={`${navStyles.spinner} ${navStyles.horizontal}`}></div>
            <div className={`${navStyles.spinner} ${navStyles.diagonal} ${navStyles.part2}`}></div>
            
        </label>

        <nav className={navStyles.navContainer} id="navContainer">
            <ul>
                <li><Link to='/aprenda' className={navStyles.navLink}>Aprenda</Link></li>
                <li><Link to='/planilhas' className={navStyles.navLink}>Planilhas</Link></li>
                <li><Link to='/blog' className={navStyles.navLink}>Blog</Link></li>
                <li><Link to='/livros' className={navStyles.navLink}>Livros</Link></li>
                <li><Link to='/enciclopedia' className={navStyles.navLink}>Enciclopédia</Link></li>
                {/* <li><Link to='/dados' className={navStyles.navLink}>Dados</Link></li>            */}
            </ul>
        </nav>
        </div>

        
    )
}

export default Nav