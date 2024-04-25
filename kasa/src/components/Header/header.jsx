import { NavLink } from "react-router-dom";
import logo from '../../assets/logo.svg'
import './header.css'
 
function Header() {
    return (
<header className="header">
<img src={logo} alt="" className="header_logo" />
<nav className="header_nav">
    <NavLink to="/" className="header_link">Accueil</NavLink>
    <NavLink to="/about" className="header_link">A propos</NavLink>
        </nav>
</header>
        
    )
}

export default Header



