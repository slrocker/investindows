import React from 'react'
import { Link } from 'gatsby'

import footerStyles from '../styles/footer.module.scss'

const Footer = () => {

    return(
        <footer className={footerStyles.footerContainer}>
            <ul className={footerStyles.secondaryNav}>
                <li><Link to='/blog'>BLOG</Link></li>
                <li><Link to=''>LIVROS</Link></li>
                <li><Link to=''>PLANILHAS</Link></li>
            </ul>
            <ul className={footerStyles.authorNav}>
                <li><Link to=''>Sobre o Autor</Link></li>
                <li><a href='mailto:jg@investindo.com.br'>Contato</a></li>
            </ul>
            <ul className={footerStyles.rulesNav}>
                <li><Link to=''>Política de Privacidade</Link></li>
                <li><Link to=''>Termo de Uso</Link></li>
            </ul>
            <ul>
                <li><a class="social-link" href="http://www.facebook.com/investindoWS/" target="new"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" title="Acesse a página do Investindo.Org no Facebook." role="img" aria-labelledby="facebook-icon-title facebook-icon-desc" class="social-icon facebook-icon"><title id="facebook-icon-title">Acesse a página do Investindo.Org no Facebook.</title><desc id="facebook-icon-desc">Letra f estilizada como símbolo do Facebook.</desc><path class="st0" d="M28.8 13.3h-6V9.4c0-1.5 1-1.8 1.7-1.8 0.7 0 4.2 0 4.2 0V1l-5.8 0c-6.5 0-8 4.9-8 8v4.3h-3.8V20h3.8c0 8.6 0 19 0 19h7.9c0 0 0-10.5 0-19h5.3L28.8 13.3z"/></svg></a></li>
                <li><a class="social-link" href="http://www.twitter.com/InvestindoOrg/" target="new"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" title="Acesse a página do Investindo.Org no Twitter." role="img" aria-labelledby="twitter-icon-title twitter-icon-desc" class="social-icon twitter-icon"><title id="twitter-icon-title">Acesse a página do Investindo.Org no Twitter.</title><desc id="twitter-icon-desc">Desenho de um pássaro estilizado como símbolo do Twitter.</desc><path class="st0" d="M12.9 35.4c14.3 0 22.2-11.9 22.2-22.2 0-0.3 0-0.7 0-1 1.5-1.1 2.8-2.5 3.9-4 -1.4 0.6-2.9 1-4.5 1.2 1.6-1 2.8-2.5 3.4-4.3C36.4 6 34.7 6.7 33 7c-3-3.1-7.9-3.3-11-0.3 -2 1.9-2.9 4.7-2.3 7.5C13.4 13.8 7.6 10.8 3.6 6c-2.1 3.6-1 8.1 2.4 10.4 -1.2 0-2.5-0.4-3.5-1 0 0 0 0.1 0 0.1 0 3.7 2.6 6.9 6.3 7.6 -1.1 0.3-2.3 0.4-3.5 0.1 1 3.2 3.9 5.4 7.3 5.4C9.8 30.9 6.4 32 2.9 32c-0.6 0-1.2 0-1.9-0.1C4.6 34.2 8.7 35.4 12.9 35.4"/></svg></a></li>
                <li><a class="social-link" href="http://plus.google.com/+InvestindoOrgWS" target="new"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" title="Acesse a página do Investindo.Org no Youtube." role="img" aria-labelledby="youtube-icon-title youtube-icon-desc" class="social-icon youtube-icon"><title id="youtube-icon-title">Acesse a página do Investindo.Org no Youtube.</title><desc id="youtube-icon-desc">Seta a direita sobre retângulo estilizado como símbolo do Youtube.</desc><path class="st0 youtube-red" d="M39.6 11.5c0 0-0.4-2.9-1.6-4.2 -1.5-1.7-3.2-1.7-4-1.8C28.4 5 20 5 20 5h0c0 0-8.4 0-14 0.4C5.2 5.5 3.5 5.5 2 7.2c-1.2 1.3-1.6 4.2-1.6 4.2S0 14.9 0 18.4v3.2c0 3.5 0.4 6.9 0.4 6.9s0.4 2.9 1.6 4.2c1.5 1.7 3.5 1.6 4.4 1.8C9.6 34.9 20 35 20 35s8.4 0 14-0.4c0.8-0.1 2.5-0.1 4-1.8 1.2-1.3 1.6-4.2 1.6-4.2s0.4-3.5 0.4-6.9v-3.2C40 14.9 39.6 11.5 39.6 11.5z"/><polygon class="youtube-white st0" points="15 14 15 26 27.5 20 "/></svg></a></li>
            </ul>
            <p>INVESTINDO.ORG © 2019</p>
        </footer>
    )
}

export default Footer