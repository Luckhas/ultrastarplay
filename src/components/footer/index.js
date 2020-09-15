import React from 'react';
import { Link } from 'react-router-dom';
import { Router } from 'react-router-dom';

function Footer() {
    return(
        <footer className="container-fluid">
            <div className="container">
                <div className="container-fluid copybar">
                    Ultrastar Play 2020 © Todos os direitos reservados
                </div>
                <div className="row">
                    <div className="col">
                        <h6>Links Principais</h6>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/download">Download</a></li>
                            <li><a href="/assinar">Assinar</a></li>
                        </ul>
                    </div>
                    <div className="col text-center">
                        <p>Formas de pagamento</p>
                        <p>
                            <img className="img-fluid" src="/assets/images/payment-options.png" alt=""/>
                        </p>
                    </div>
                    <div className="col text-right">
                        <p>powered by</p>
                        <p>
                            <img className="logo" src="/assets/images/logo.png" alt=""/>
                        </p>
                        <div className="social-medias">
                            <div className="text-right">Siga-nos nas redes sociais!</div>
                            <div className="row">
                                <div className="col">
                                    <a href="https://www.facebook.com/heleno.venancio.56" target="_blank">
                                        <i className="fab fa-facebook-square"></i>
                                    </a>
                                    <a href="https://www.instagram.com/heleno.venancio.56" target="_blank">
                                        <i className="fab fa-instagram"></i>
                                    </a>
                                    <a href="https://www.youtube.com/channel/UCTDanNXCy5J9ZhuPYw6rnXw" target="_blank">
                                        <i className="fab fa-youtube"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;