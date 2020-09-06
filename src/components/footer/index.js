import React from 'react';

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
                            <li><a href="">Home</a></li>
                            <li><a href="">Download</a></li>
                            <li><a href="">Assinar</a></li>
                            <li><a href="">Baixar</a></li>
                            <li><a href="">Como Baixar</a></li>
                            <li><a href="">Como Usar</a></li>
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
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;