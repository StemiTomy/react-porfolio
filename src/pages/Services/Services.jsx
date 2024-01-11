import React, { useEffect, useContext } from 'react';
import { LanguageContext } from '../../LanguageContext';

const Services = () => {
    const { translations } = useContext(LanguageContext);
    
    useEffect(() => {
        document.title = translations.services.pageTitle;
    }, [translations.services.pageTitle]);

    return (
        <section className="services" id="services">
            <div className="max-width">
                <h2 className="title">{translations.services.sectionTitle}</h2>
                <div className="serv-content">
                    <div className="card">
                        <div className="box">
                            <i className="fa fa-code"></i>
                            <div className="text">{translations.services.items[0].title}</div>
                            <p>{translations.services.items[0].description}</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="box">
                            <i className="fa fa-paint-brush"></i>
                            <div className="text">{translations.services.items[1].title}</div>
                            <p>{translations.services.items[1].description}</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="box">
                            <i className="fa fa-cogs"></i>
                            <div className="text">{translations.services.items[2].title}</div>
                            <p>{translations.services.items[2].description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;