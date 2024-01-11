import React, { useEffect, useContext } from 'react';
import Typed from 'typed.js';
import './About.css';
import { LanguageContext } from '../../LanguageContext';

const About = () => {
    const { translations, language } = useContext(LanguageContext);
    
    useEffect(() => {
        document.title = translations.home.pageTitle;
    }, [translations.home.pageTitle]);

    const cvLink = language === 'es' ? '/Stelut_CV.pdf' : '/Stelut_CV_EN.pdf';

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
        <section className="about" id="about">
            <div className="max-width">
                <h2 className="title">{translations.about.sectionTitle}</h2>
                <div className="about-content">
                    <div className="column left">
                        <img src={`${process.env.PUBLIC_URL}/perfil1r.png`} alt="Profile 1" />
                    </div>
                    <div className="column right">
                        <div className="text">
                            {translations.about.intro}<span className="typing"></span>
                        </div>
                        <p>{translations.about.description}</p>
                        <a href={cvLink} target="_blank" rel="noopener noreferrer">{translations.about.downloadCV}</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;