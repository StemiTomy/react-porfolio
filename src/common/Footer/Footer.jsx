import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import { LanguageContext } from '../../LanguageContext';

const Footer = () => {
    const { translations } = useContext(LanguageContext);
    
    return (
        <footer>
            <span>{translations.footer}<Link to="/home">Stelut Grigore Tomoiaga</Link>.</span>
        </footer>
    );
};

export default Footer;