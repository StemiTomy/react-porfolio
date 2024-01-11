import React, { useEffect, useContext } from 'react';
import './Skills.css';
import { LanguageContext } from '../../LanguageContext';

const Skills = () => {
    const { translations } = useContext(LanguageContext);
    
    useEffect(() => {
        document.title = translations.services.pageTitle;
    }, [translations.services.pageTitle]);

    return (
        <section className="skills" id="skills">
            <div className="max-width">
                <h2 className="title">{translations.skills.sectionTitle}</h2>
                <div className="skills-content">
                    <div className="column left">
                        <div className="text">{translations.skills.textTitle}</div>
                        <p>{translations.skills.textDescription}</p>
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