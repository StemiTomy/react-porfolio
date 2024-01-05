import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Typed from 'typed.js';
import './Home.css';

const Home = () => {
    useEffect(() => {
        document.title = "Stelut Tomoiaga Grigore";
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
        <section className="home" id="home">
            <div className="max-width">
                <div className="contenido-principal">
                    <div className="texto1">Hola, mi nombre es</div>
                    <div className="texto2">Stelut Grigore Tomoiaga</div>
                    <div className="texto3">Soy <span className="typing"></span></div>
                    <Link to="/contact">Contrátame</Link>
                </div>
            </div>
        </section>
    );
};

export default Home;