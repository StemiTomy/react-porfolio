import React, { useEffect } from 'react';

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
                            <i className="fa fa-code"></i>
                            <div className="text">Proyecto Travel Time Game</div>
                            <p>Se trata de un juego para plataforma Android e IOS desarollado con el motor Unity con C# y
                                Firebase como base de datos. Dejo el link de descarga para más.
                            </p>
                            <a href="https://stelut.itch.io/travel-time-game"
                                style={{textDecoration: 'underline', color: 'white'}}> Travel
                                Time Game</a>
                        </div>
                    </div>
                    <div className="card">
                        <div className="box">
                            <i className="fa fa-code"></i>
                            <div className="text">Script Manager</div>
                            <p>Proyecto hecho en prácticas de empresa para ejecutar scripts SQL en entornos de desarrollo,
                                preproducción
                                o producción, paga agilizar los problemas comunes que llegan a los desarrolladores. App
                                hecha con Spring
                                Boot, java, bootstrap, js, html y css. Como consultas utilizamos JDBC o JPA según conviene
                                más uno u otro. Al no tratarse de un proyecto público no puedo poner a disposición una demo.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;