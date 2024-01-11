import React, { useEffect, useContext } from 'react';
import './Projects.css';
import { LanguageContext } from '../../LanguageContext';

const Projects = () => {
    const { translations } = useContext(LanguageContext);

    useEffect(() => {
        document.title = translations.projects.pageTitle;
    }, [translations.projects.pageTitle]);

    return (
        <section className="projects" id="projects">
            <div className="max-width">
                <h2 className="title">{translations.projects.sectionTitle}</h2>
                <div className="projects-content">
                    <div className="card">
                        <div className="box">
                            <i className="fa fa-gamepad"></i>
                            <div className="text">{translations.projects.items[0].title}</div>
                            <p>{translations.projects.items[0].description}</p>
                            <a href="https://stelut.itch.io/travel-time-game" target="_blank" rel="noreferrer">Travel Time Game</a>
                        </div>
                    </div>
                    <div className="card">
                        <div className="box">
                            <i className="fa fa-code"></i>
                            <i className="fa fa-database"></i>
                            <div className="text">{translations.projects.items[1].title}</div>
                            <p>{translations.projects.items[1].description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;