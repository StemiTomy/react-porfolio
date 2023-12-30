import React, { useEffect } from 'react';

const Skills = () => {
    useEffect(() => {
        document.title = "Stelut Tomoiaga Grigore | Skills";
    }, []);

    return (
        <section className="skills" id="skills">
            <div className="max-width">
                <h2 className="title">Conocimientos</h2>
                <div className="skills-content">
                    <div className="column left">
                        <div className="text">Mis habilidades y experiencias</div>
                        <p>Tengo un amplio conocimiento del desarrollo de software, ya sea en la POO
                            (Programación Orientada a Objetos) como en el acceso y la manipulación de datos mediante consola
                            o interfaces. Trabajo con diferentes lenguajes (Java, Python, Kotlin) junto con las librerías y
                            los framewokrs correspondientes. Tengo experiencia en debug, documentación y rápida
                            implementación
                            de nuevas funciones o aplicaciones, como por ejemplo utilizando Spring Boot (app: Script
                            Manager).</p>
                    </div>
                    <div className="column right">
                        <div className="bars">
                            <div className="info">
                                <span>Java</span>
                                <span>100%</span>
                            </div>
                            <div className="line java"></div>
                        </div>
                        <div className="bars">
                            <div className="info">
                                <span>JS, CSS y HTML</span>
                                <span>90%</span>
                            </div>
                            <div className="line html5"></div>
                        </div>
                        <div className="bars">
                            <div className="info">
                                <span>SQL (MySQL, MSSQL, SQL y sus variantes)</span>
                                <span>80%</span>
                            </div>
                            <div className="line mysql"></div>
                        </div>
                        <div className="bars">
                            <div className="info">
                                <span>Python, Kotlin</span>
                                <span>80%</span>
                            </div>
                            <div className="line python"></div>
                        </div>
                        <div className="bars">
                            <div className="info">
                                <span>Spring</span>
                                <span>90%</span>
                            </div>
                            <div className="line spring"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;