import React from 'react';
import logoFooter from '../../assets/logo_footer.svg'
import './footer.css'
const Footer = () => {
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