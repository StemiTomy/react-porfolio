import React, { useEffect } from 'react';
import './Projects.css';

const Projects = () => {
    useEffect(() => {
        document.title = "Stelut Tomoiaga Grigore | Projects";
    }, []);

    return (
        <section className="projects" id="projects">
            <div className="max-width">
                <h2 className="title">Proyectos</h2>
                <div className="projects-content">
                    <div className="card">
                        <div className="box">
                            <i className="fa fa-gamepad"></i>
                            <div className="text">Travel Time Game</div>
                            <p>Se trata de un juego para plataforma Android e IOS desarollado con el motor Unity con C# y
                                Firebase como base de datos. Dejo el link de descarga.
                            </p>
                            <a href="https://stelut.itch.io/travel-time-game" target="_blank" rel="noreferrer">Travel Time Game</a>
                        </div>
                    </div>
                    <div className="card">
                        <div className="box">
                            <i className="fa fa-code"></i>
                            <i className="fa fa-database"></i>
                            <div className="text">Script Manager</div>
                            <p>Proyecto para ejecutar scripts SQL en entornos de desarrollo,
                                preproducción
                                o producción, paga agilizar las incidencias comunes. App
                                hecha con Spring
                                Boot (Maven, hibernate, XML), java, js (angular), html y css (bootstrap). Como consultas utilizamos JDBC o JPA según conviene.
                                Al no ser un proyecto público no puedo poner a disposición una demo.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;