import React, { useState, useEffect, useRef } from 'react';
import Typed from 'typed.js';
import "./Socials.css";

const Socials = () => {

    const goToGitHub = () => {
        window.open('https://github.com/StemiTomy', '_blank', 'noopener,noreferrer');
    };

    const sendEmail = () => {
        window.location.href = 'mailto:stemitomy@gmail.com';
    };

    const [showPhone, setShowPhone] = useState(false);
    const phoneNumber = "+34 684118554";
    const typedRef = useRef(null);

    const togglePhone = () => {
        setShowPhone(!showPhone);
    };

    useEffect(() => {
        if (showPhone && phoneNumber) {
            typedRef.current = new Typed('#typed-phone', {
                strings: [phoneNumber],
                typeSpeed: 50,
                backSpeed: 50,
                loop: false,
                showCursor: false,
            });
        }

        return () => {
            if (typedRef.current) {
                typedRef.current.destroy();
                typedRef.current = null;
            }
        };
    }, [showPhone, phoneNumber]);

    return (
        <div className="socials">
            <div className="icon-container">
                <i className="fa fa-github" onClick={goToGitHub} aria-hidden="true"></i>
            </div>
            <div className="icon-container">
                <i className="fa fa-envelope" onClick={sendEmail} aria-hidden="true"></i>
            </div>
            <div className="icon-container">
                <i className="fa fa-phone" onClick={togglePhone} aria-hidden="true"></i>
                {showPhone && phoneNumber && <span id="typed-phone"></span>}
            </div>
        </div>
    );
};

export default Socials;