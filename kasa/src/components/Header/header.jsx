import { NavLink } from "react-router-dom";
import logo from '../../assets/Logo/logo.svg'
import './header.scss'
 
function Header() {
    return (
<header className="header">
<img src={logo} alt="" className="header_logo" />
<nav className="header_nav">
    <NavLink to="/" className="header_link" activeclassName="header_link_active">Accueil</NavLink>
    <NavLink to="/about" className="header_link" activeclassName="header_link_active">A propos</NavLink>
        </nav>
</header>
        
    )
}

export default Header



