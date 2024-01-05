import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <footer>
            <span>Creado por <Link to="/home">Stelut Grigore Tomoiaga</Link> | <span className="fa fa-copyright"></span> Todos los derechos
                reservados.</span>
        </footer>
    );
};

export default Footer;