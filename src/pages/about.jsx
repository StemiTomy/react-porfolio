import React, { useEffect } from 'react';

const About = () => {
    useEffect(() => {
        document.title = "Stelut Tomoiaga Grigore | About";
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
                            Soy Stelut, soy <span className="typing-2"></span>
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