import React from 'react';
import logoFooter from '../../assets/Logo/logo_footer.svg'
import './footer.scss'

function Footer () {
    return (
      <footer className="footer">
        <img src={logoFooter} alt="" className="footer__logo" />
        <p className="footer__text-copyright">
          © 2020 Kasa. All rights reserved
        </p>
      </footer>
    );
}

export default Footer;