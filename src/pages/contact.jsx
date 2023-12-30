import React, { useEffect } from 'react';

const Contact = () => {
    useEffect(() => {
        document.title = "Stelut Tomoiaga Grigore | Contact";
    }, []);

    return (
        <section className="contact" id="contact">
            <div className="max-width">
                <h2 className="title">Contacta conmigo</h2>
                <div className="contact-content">
                    <div className="column left">
                        <div className="text">Contacta</div>
                        <p>Comunícate conmigo mediante teléfono, correo electrónico o mis redes sociales. Gracias por su
                            interés.</p>
                        <div className="icons">
                            <div className="row">
                                <i className="fa fa-phone"></i>
                                <div className="info">
                                    <div className="head">Teléfono</div>
                                    <div className="sub-title">+34 684 118 554</div>
                                </div>
                            </div>
                            <div className="row">
                                <i className="fa fa-envelope"></i>
                                <div className="info">
                                    <div className="head">E-Mail</div>
                                    <div className="sub-title">stemitomy@gmail.com</div>
                                </div>
                            </div>
                            <div className="row">
                                <i className="fa fa-map-marker"></i>
                                <div className="info">
                                    <div className="head">Dirección</div>
                                    <div className="sub-title">España, Comunidad Valenciana, Oliva (46780)</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="column right">
                        <div className="text">Envíame un mensaje</div>
                        <form action="https://formsubmit.co/566650fd39def48f190ad1751785ca38" method="POST">
                            <div className="fields">
                                <div className="field name">
                                    <input type="text" name="name" placeholder="Nombre" required />
                                </div>
                                <div className="field email">
                                    <input type="email" name="email" placeholder="E-Mail" required />
                                </div>
                            </div>
                            <div className="field">
                                <input type="text" name="_subject" placeholder="Asunto" required />
                            </div>
                            <div className="field textarea">
                                <textarea cols="30" rows="10" name="message" placeholder="Describe el asunto..."
                                    required></textarea>
                            </div>
                            <div className="button">
                                <button type="submit">Enviar mensaje</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;