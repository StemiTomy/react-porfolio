import React, { useEffect } from 'react';
import Typed from 'typed.js';
import './About.css';

const About = () => {
    useEffect(() => {
        document.title = "Stelut Tomoiaga Grigore | About";
    }, []);

    // scirpt para escribir
    useEffect(() => {
        const options = {
            strings: ["Programador", "Diseñador", "Analista"],
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
    }, []);

    return (
        <section className="about" id="about">
            <div className="max-width">
                <h2 className="title">Sobre mí</h2>
                <div className="about-content">
                    <div className="column left">
                        <img src="/perfil1r.png" alt="perfil 1"/>
                    </div>
                    <div className="column right">
                        <div className="text">
                            Soy Stelut, soy <span className="typing"></span>
                        </div>
                        <p>Soy un programador, desarrollador con experiencia en aplicaciones multiplataforma y web, con
                            amplia experiencia en Java, JavaScript, Kotlin y Python. Diseñador de páginas web
                            adaptables al dispositivo (responsive), con una interfaz atractiva para el usuario final y de
                            uso intuitivo.
                            Me considero un analista de sistemas, datos y código. Con formación en el
                            Grado Superior de Desarrollo de Aplicaciones Multiplataforma (DAM). Para saber más sobre mi, por
                            favor, descarga mi CV.</p>
                        <a href="/Stelut_CV.pdf" target="_blank" rel="noopener noreferrer">Descargar CV</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;