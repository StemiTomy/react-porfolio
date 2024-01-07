import React, { useEffect } from 'react';
import './Skills.css';

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
                                <span>Java (Spring Boot)</span>
                                <span>80%</span>
                            </div>
                            <div className="line java"></div>
                        </div>
                        <div className="bars">
                            <div className="info">
                                <span>Python</span>
                                <span>80%</span>
                            </div>
                            <div className="line python"></div>
                        </div>
                        <div className="bars">
                            <div className="info">
                                <span>JavaScript (React, Angular)</span>
                                <span>80%</span>
                            </div>
                            <div className="line js"></div>
                        </div>
                        <div className="bars">
                            <div className="info">
                                <span>SQL (MySQL, PostgreSQL, MSSQL)</span>
                                <span>70%</span>
                            </div>
                            <div className="line mysql"></div>
                        </div>
                        <div className="bars">
                            <div className="info">
                                <span>CSS (Vanilla & Bootstrap)</span>
                                <span>70%</span>
                            </div>
                            <div className="line css"></div>
                        </div>
                        <div className="bars">
                            <div className="info">
                                <span>C#, Kotlin, Swift</span>
                                <span>50%</span>
                            </div>
                            <div className="line others"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;