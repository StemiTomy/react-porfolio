import React, { useEffect } from 'react';

const Services = () => {
    useEffect(() => {
        document.title = "Stelut Tomoiaga Grigore | Services";
    }, []);

    return (
        <section className="services" id="services">
            <div className="max-width">
                <h2 className="title">Servicios</h2>
                <div className="serv-content">
                    <div className="card">
                        <div className="box">
                            <i className="fa fa-code"></i>
                            <div className="text">Desarrollos</div>
                            <p>Implementación de aplicaciones para todo tipo de dispositivos y plataformas en diferentes
                                lenguajes. Entre los principales Java, Python y JavaScript.</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="box">
                            <i className="fa fa-paint-brush"></i>
                            <div className="text">Diseño Web</div>
                            <p>Creación y modificación de páginas web mediante HTML, CSS y JavaScript junto con sus
                                frameworks (React, Angular, Bootstrap) entre otros.
                            </p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="box">
                            <i className="fa fa-cogs"></i>
                            <div className="text">Análisis</div>
                            <p>Observar el entorno de desarrollo y el código entendiendo su funcionamiento para
                                optimizar el rendimiento con control de errores, logs, debugging y documentación.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;