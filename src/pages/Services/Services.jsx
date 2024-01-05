import React, { useEffect } from 'react';
import './Services.css';

const Services = () => {
    useEffect(() => {
        document.title = "Stelut Tomoiaga Grigore | Services";
    }, []);

    return (
        <section className="services" id="services">
            <div className="max-width">
                <h2 className="title">Mis servicios</h2>
                <div className="serv-content">
                    <div className="card">
                        <div className="box">
                            <i className="fa fa-code"></i>
                            <div className="text">Desarrollo de Apps</div>
                            <p>Implementación de aplicaciones para todo tipo de dispositivos y plataformas en diferentes
                                lenguajes.</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="box">
                            <i className="fa fa-paint-brush"></i>
                            <div className="text">Diseño Web</div>
                            <p>Creación y modificación de páginas web mediante HTML, CSS y JavaScript junto con sus
                                frameworks, ya sea SpringBoot, Angular o Bootstrap, entre otros.
                            </p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="box">
                            <i className="fa fa-cogs"></i>
                            <div className="text">Análisis de código</div>
                            <p>Observar el entorno de desarrollo y el código fuente entendiendo su funcionamiento, para
                                optimizar el rendimiento con control de errores, logs y debugging para irregularidades.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;