import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="max-width">
                <div className="logo"><Link to="/home">Portfo<span>lio.</span></Link></div>
                <ul className="menu">
                    <li><Link to="/home">Página Principal</Link></li>
                    <li><Link to="/about">Sobre mi</Link></li>
                    <li><Link to="/projects">Proyectos</Link></li>
                    <li><Link to="/services">Servicios</Link></li>
                    <li><Link to="/skills">Conocimientos</Link></li>
                    <li><Link to="/contact">Contacto</Link></li>
                </ul>
                <div className="menu-btn">
                    <i clas="fa fa-bars"></i>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;