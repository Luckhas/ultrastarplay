import React from 'react';

function Menu() {
    return (
        <nav className="navbar navbar-expand-lg container">
            <a className="navbar-brand" href="#">
                <img src="/assets/images/logo.png"/>
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mainNavbar" aria-controls="mainNavbar" aria-expanded="false" aria-label="Toggle navigation">
                {/* <span className="navbar-toggler-icon">
                    <i className="fas fa-bars"></i>
                </span> */}
                <i className="fas fa-bars navbar-toggler-icon"></i>

            </button>

            <div className="collapse navbar-collapse" id="mainNavbar">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="/">Início <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="/assinar">Assinar</a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="/download">Download</a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="/contato">Contato</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Menu;