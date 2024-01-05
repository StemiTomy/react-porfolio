import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";

const Navbar = () => {
    const [menuActive, setMenuActive] = useState(false);

    const toggleMenu = () => {
        setMenuActive(!menuActive);
    };

    const closeMenu = () => {
        setMenuActive(false);
    };

    useEffect(() => {
        const handleScroll = () => {
            const navbar = document.querySelector('.navbar');
            if (window.scrollY > 20) {
                navbar.classList.add('sticky');
            } else {
                navbar.classList.remove('sticky');
            }
        };

        // Añadir el evento de desplazamiento al montar
        window.addEventListener('scroll', handleScroll);

        // Limpiar el evento al desmontar el componente
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className="navbar">
            <div className="max-width">
                <div className="logo"><Link to="/home">Stelut Tomoiaga <span>CV</span></Link></div>
                <ul className={`menu ${menuActive ? 'active' : ''}`}>
                    <li><Link to="/home" onClick={closeMenu}>Página Principal</Link></li>
                    <li><Link to="/about" onClick={closeMenu}>Sobre mi</Link></li>
                    <li><Link to="/projects" onClick={closeMenu}>Proyectos</Link></li>
                    <li><Link to="/services" onClick={closeMenu}>Servicios</Link></li>
                    <li><Link to="/skills" onClick={closeMenu}>Conocimientos</Link></li>
                </ul>
                <div className="menu-btn" onClick={toggleMenu}>
                    <i className={`fa fa-bars ${menuActive ? 'active' : ''}`} aria-hidden="true"></i>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;