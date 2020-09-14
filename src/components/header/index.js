import React from 'react';
import Menu from '../menu';

function Header(props) {
    return (
        <header>

            <div id="menu" className="container-lg">
                <Menu/>
            </div>

            <div id="header-content">
                <div className="container">
                    <div className="row ">
                        <div className="col-md-4">
                            <h1>
                                Turbine sua TV
                            </h1>
                            <p>
                                Com os melhores APLICATIVOS do momento.
                                Viva a experiência redplay e my family cinema.
                            </p>
                            <a href="asda" className="btn btn-light">Experimente GRÁTIS por 7 dias</a>
                        </div>
                        <div className="col-md d-flex justify-content-end align-items-center">
                            <img className="featured" src="assets/images/iptv.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="header-wave"></div>
            <div className="header-bg"></div>





            {/* {props.children}
            <div id="header" className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h1>
                            Lorem ipsum, dolor sit amet
                        </h1>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit provident eaque laborum consequatur architecto odio.
                        </p>
                        <a href="asda" className="btn btn-light">Experimente GRÁTIS por 7 dias</a>
                    </div>
                    <div className="col-md d-flex justify-content-center align-items-center">
                        <img className="featured" src="assets/images/iptv.png" alt=""/>
                    </div>
                </div>
            </div> */}
        </header>
    );
}

export default Header;