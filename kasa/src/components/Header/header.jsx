import { NavLink } from "react-router-dom";
import logo from '../../assets/Logo/logo.svg'
import './header.scss'
 
function Header() {
    return (
        <header className="header">
            <img src={logo} alt="" className="header_logo" />
            <nav className="header_nav">
                <NavLink 
                    to="/" 
                    className={({ isActive }) => isActive ? "header_link_active" : "header_link"}
                >
                    Accueil
                </NavLink>
                <NavLink 
                    to="/about" 
                    className={({ isActive }) => isActive ? "header_link_active" : "header_link"}
                >
                    A propos
                </NavLink>
            </nav>
        </header>
    )
}

export default Header

