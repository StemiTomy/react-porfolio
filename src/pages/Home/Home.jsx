import React, { useEffect, useContext } from 'react';
import Typed from 'typed.js';
import './Home.css';
import { LanguageContext } from '../../LanguageContext';

const Home = () => {
    const { translations } = useContext(LanguageContext);
    
    useEffect(() => {
        document.title = translations.home.pageTitle;
    }, [translations.home.pageTitle]);

    const sendEmail = () => {
        window.location.href = 'mailto:stemitomy@gmail.com';
    };

    // scirpt para escribir
    useEffect(() => {
        const options = {
            strings: translations.home.professions,
            typeSpeed: 100,
            backSpeed: 60,
            loop: true
        };
        
        // Inicializando Typed
        const typed = new Typed(".typing", options);

        // Limpieza
        return () => {
            typed.destroy();
        };
    }, [translations.home.professions]);

    return (
        <section className="home" id="home">
            <div className="max-width">
                <div className="contenido-principal">
                    <div className="texto1">{translations.home.greeting}</div>
                    <div className="texto2">{translations.home.name}</div>
                    <div className="texto3">{translations.home.professionPrefix} <span className="typing"></span></div>
                    <div className="contact" onClick={sendEmail}>{translations.home.hireMe}</div>
                </div>
            </div>
        </section>
    );
};

export default Home;