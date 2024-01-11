import React, { useEffect, useState, useRef, useContext } from 'react';
import { Link } from 'react-router-dom';
import Typed from 'typed.js';
import "./Navbar.css";
import "./Socials.css";
import { LanguageContext } from '../../LanguageContext';

const Navbar = () => {
    const [menuActive, setMenuActive] = useState(false);

    const toggleMenu = () => {
        setMenuActive(!menuActive);
        menuActive ? document.body.style.overflow = '' : document.body.style.overflow = 'hidden';
    };

    const closeMenu = () => {
        setMenuActive(false);
        document.body.style.overflow = '';
    };

    useEffect(() => {
        const handleScroll = () => {
            const navbar = document.querySelector('.navbar');
            if (window.scrollY > 20) {
                navbar.classList.add('sticky');
            } else {
                navbar.classList.remove('sticky');
            }
        };

        // Añadir el evento de desplazamiento al montar
        window.addEventListener('scroll', handleScroll);

        // Limpiar el evento al desmontar el componente
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Seccion Socials
    const goToGitHub = () => {
        window.open('https://github.com/StemiTomy', '_blank', 'noopener,noreferrer');
    };

    const sendEmail = () => {
        window.location.href = 'mailto:stemitomy@gmail.com';
    };

    const [showPhone, setShowPhone] = useState(false);
    const [copySuccess, setCopySuccess] = useState('');
    const [isMobile, setIsMobile] = useState(window.innerWidth < 975);
    const phoneNumber = "+34 684118554";
    const typedRef = useRef(null);

    useEffect(() => {
        if (showPhone && phoneNumber && !isMobile) {
            typedRef.current = new Typed('#typed-phone', {
                strings: [phoneNumber],
                typeSpeed: 50,
                backSpeed: 50,
                loop: false,
                showCursor: false,
                onComplete: self => {
                    let typedElement = document.getElementById('typed-phone');
                    if (typedElement) {
                        typedElement.style.cursor = 'pointer';
                        typedElement.addEventListener('click', copyToClipboard);
                    }
                }
            });
        } else if (typedRef.current) {
            typedRef.current.destroy();
            typedRef.current = null;
        }
    
        return () => {
            if (typedRef.current) {
                typedRef.current.destroy();
                typedRef.current = null;
            }
            let typedElement = document.getElementById('typed-phone');
            if (typedElement) {
                typedElement.removeEventListener('click', copyToClipboard);
            }
        };
    }, [showPhone, phoneNumber, isMobile]);
    

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 975);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const copyToClipboard = () => {
        navigator.clipboard.writeText(phoneNumber).then(() => {
            setCopySuccess('Número copiado al portapapeles!');
            setTimeout(() => setCopySuccess(''), 2000);
        }, () => {
            setCopySuccess('Error al copiar');
        });
    };

    const togglePhone = () => {
        if (isMobile) {
            copyToClipboard();
            setTimeout(() => {
                window.location.href = `tel:${phoneNumber}`;
            }, 1000);
        } else {
            setShowPhone(!showPhone);
        }
    };

    const { language, setLanguage, translations } = useContext(LanguageContext);

    const handleLanguageChange = (event) => {
        setLanguage(event.target.value);
    };

    return (
        <nav className="navbar">
            <div className="max-width">
                <div className="logo"><Link to="/home">Stelut Tomoiaga <span>CV</span></Link></div>
                <ul className={`menu ${menuActive ? 'active' : ''}`}>
                    <li><Link to="/home" onClick={closeMenu}>{translations.home.sectionTitle}</Link></li>
                    <li><Link to="/about" onClick={closeMenu}>{translations.about.sectionTitle}</Link></li>
                    <li><Link to="/projects" onClick={closeMenu}>{translations.projects.sectionTitle}</Link></li>
                    <li><Link to="/services" onClick={closeMenu}>{translations.services.sectionTitle}</Link></li>
                    <li><Link to="/skills" onClick={closeMenu}>{translations.skills.sectionTitle}</Link></li>
                    <select onChange={handleLanguageChange} value={language} className="language-select">
                        <option value="es">{translations.languageOptions.es}</option>
                        <option value="en">{translations.languageOptions.en}</option>
                    </select>
                </ul>
                <div className={`socials ${menuActive ? 'active' : ''}`}>
                    <div className="icon-container"  onClick={goToGitHub}>
                        <i className="fa fa-github" aria-hidden="true"></i>
                    </div>
                    <div className="icon-container"  onClick={sendEmail}>
                        <i className="fa fa-envelope" aria-hidden="true"></i>
                    </div>
                    <div className="icon-container" onClick={togglePhone}>
                        <i className="fa fa-phone" aria-hidden="true"></i>
                        {showPhone && !isMobile && phoneNumber && <span id="typed-phone"></span>}
                        {copySuccess && <span className="copy-success-message">{copySuccess}</span>}
                    </div>
                </div>
                <div className="menu-btn" onClick={toggleMenu}>
                    <i className={`fa fa-bars ${menuActive ? 'active' : ''}`} aria-hidden="true"></i>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;