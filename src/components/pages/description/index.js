import React from "react";
import { Parallax, Background } from "react-parallax";
import Faq from "react-faq-component";
import TestItem from "../../components/carouselItem";


function Description() {
    return (
        <section id="channels" className="container-fluid p-0">
            <h2>Conheça nossos planos</h2>
            
            <div className="first-plan">
                <div className="row">
                    <div className="col-5 text-left pl-5">
                        <span className="coin">R$</span>
                        <span className="price">24,99</span>
                        <span className="pertime"> / mês</span>
                        <div className="plans">
                            <a href="#" className="btn btn-plans">
                                Assinar
                            </a>
                        </div>
                    </div>
                    <div className="col-7 pr-5">
                        <h2>My family cinema</h2>
                        <h5>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</h5>
                    </div>
                </div>
            </div>

            <div className="second-plan">
                <div className="row">
                    <div className="col-5 text-left pl-5">
                        <span className="coin">R$</span>
                        <span className="price">129,99</span>
                        <span className="pertime"> / ano</span>
                        <div className="plans">
                            <a href="#" className="btn btn-plans">
                                Assinar
                            </a>
                        </div>
                    </div>
                    <div className="col-7 pr-5">
                        <h2>Red play</h2>
                        <h5>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</h5>
                    </div>
                </div>
            </div>

            <div className="third-plan">
                <div className="row">
                    <div className="col-5 text-left pl-5">
                        <span className="coin">R$</span>
                        <span className="price">24,99</span>
                        <span className="pertime"> / mês</span>
                        <div className="plans">
                            <a href="#" className="btn btn-plans">
                                Assinar
                            </a>
                        </div>
                    </div>
                    <div className="col-7 pr-5">
                        <h2>My family cinema</h2>
                        <h5>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</h5>
                    </div>
                </div>
            </div>

            <div className="fourth-plan mb-5">
                <div className="row">
                    <div className="col-5 text-left pl-5">
                        <span className="coin">R$</span>
                        <span className="price">129,99</span>
                        <span className="pertime"> / ano</span>
                        <div className="plans">
                            <a href="#" className="btn btn-plans">
                                Assinar
                            </a>
                        </div>
                    </div>
                    <div className="col-7 pr-5">
                        <h2>Red play</h2>
                        <h5>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</h5>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Description;
