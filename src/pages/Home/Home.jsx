import React, { useEffect } from 'react';
import Typed from 'typed.js';
import './Home.css';

const Home = () => {
    useEffect(() => {
        document.title = "Stelut Tomoiaga Grigore";
    }, []);

    const sendEmail = () => {
        window.location.href = 'mailto:stemitomy@gmail.com';
    };

    // scirpt para escribir
    useEffect(() => {
        const options = {
            strings: ["Programador", "Diseñador"],
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
        <section className="home" id="home">
            <div className="max-width">
                <div className="contenido-principal">
                    <div className="texto1">Hola, mi nombre es</div>
                    <div className="texto2">Stelut Grigore Tomoiaga</div>
                    <div className="texto3">Soy <span className="typing"></span></div>
                    <div className="contact" onClick={sendEmail}>Contrátame</div>
                </div>
            </div>
        </section>
    );
};

export default Home;