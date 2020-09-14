import React, { useState, useEffect } from "react";
import { Parallax, Background } from "react-parallax";
import Faq from "react-faq-component";
import TestItem from "../../components/carouselItem";
import PlanItem from "../../components/planItem";
import { planService } from "../../../services/PlanService";
import { useHistory, withRouter } from "react-router-dom";

const data = {
    // title: "FAQ (Colocar perguntas aqui.)",
    rows: [
        {
            title: "O que é REDPLAY?",
            content: `Acesso a +300 canais RedPlay por 30 dias ou 365 dias
            198 Canais nacionais e internacionais + 60 Canais em 4K + 40 Canais adultos
            Acesso gratuito ao aplicativo HOT ao fazer login com a mesma conta RedPlay
            App móvel para smartphone Android
            Você pode usar a mesma conta no celular e na TV box (não simultaneamente).`,
        },
        {
            title: "O que é MY FAMILY CINEMA?",
            content: "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam, vitae convallis ex tortor sed dolor.",
        },
        {
            title: "Quais são as formas de pagamento?",
            content: `Cartão de crédito (mercado pago), transferência bancária ou depósitos e Pic Pay. (Não aceitamos depósito em envelope)`,
        },
        {
            title: "Sobre os aparelhos TV Box?",
            content: "<img src='https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png' />",
        },
    ],
};

const styles = {
    // bgColor: 'white',
    // titleTextColor: "#717171",
    rowTitleColor: "#717171",
    rowContentColor: "#717171",
    arrowColor: "#717171",
    paddingLeft: "15px",
};

const config = {
    // animate: true,
    arrowIcon: " ",
};

function Home() {
    const [plans, setPlans] = useState([]);
    useEffect(() => {
        const result = planService.getPlans();
        setPlans(result);
    }, []);

    const history = useHistory();

    const handlePlanSelect = (plan) => {
        history.push('/assinar/' + plan.type);
    }

    return (
        <div id="middleContent" className="container-fluid p-0">
            <section id="channels" className="container-fluid">
                <div className="container">
                    <div className="mb-4">
                        <h2>O mundo do cinema ao alcance da sua mão!</h2>
                        <h1>A sua disposição</h1>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="row">
                                <div className="col">
                                    <div className="text-right">
                                        <i className="fas fa-tv"></i>
                                    </div>
                                    <div className="text-right fs_1-5">
                                        Acesso a<br />
                                        +200 Canais
                                    </div>
                                </div>
                                <div className="col">
                                    <ul className="check-list">
                                        <li>
                                            <i className="fas fa-check"></i> HBO
                                        </li>
                                        <li>
                                            <i className="fas fa-check"></i> TELECINE
                                        </li>
                                        <li>
                                            <i className="fas fa-check"></i> PREMIERE
                                        </li>
                                        <li>
                                            <i className="fas fa-check"></i> Discovery
                                        </li>
                                        <li>
                                            <i className="fas fa-check"></i> History
                                        </li>
                                        <li>... e muito mais!</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <img id="channelsLogos" src="/assets/images/channels-logo.png" />
                        </div>
                    </div>
                </div>
            </section>
            <section id="watchAnywhere" className="container-fluid">
                <div className="container">
                    <h3 className="mb-5">Assista em todo lugar</h3>

                    <div id="devices" className="row">
                        <div className="col-sm-4 my-3 my-md-0">
                            <div>
                                <img src="/assets/images/telephone-android.svg" />
                            </div>
                            <div>Celular</div>
                        </div>
                        <div className="col-sm-4 my-3 my-md-0">
                            <div>
                                <img src="/assets/images/smart-tv.svg" />
                            </div>
                            <div>Televisão</div>
                        </div>
                        <div className="col-sm-4 my-3 my-md-0">
                            <div>
                                <img src="/assets/images/tv-box.svg" />
                            </div>
                            <div>TV Box</div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid text-center mt-4">Para sistemas Android</div>
            </section>
            <section id="products">
                <Parallax strength={300} bgImage={require("./girls-movie.jpg")} bgImageStyle={{ height: "200%", width: "auto" }}>
                    <div className="parallax-inside">
                        <div>
                            <div>
                                <p>
                                    Escolha a melhor plataforma
                                    <br />
                                    para as suas necessidades!
                                </p>
                                <div className="mt-5">
                                    <div className="row">
                                        <div className="col">
                                            <img src="/assets/images/redplay-logo.png" />
                                        </div>
                                        <div className="col">
                                            <img src="/assets/images/my-family-cinema-logo.png" />
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="mt-5 mb-3">SAIBA MAIS</div>
                                    <div className="animate__animated animate__bounce animate__infinite">
                                        <i className="fas fa-caret-down"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="black-gradient"></div>
                    </div>
                </Parallax>
            </section>
            <section id="plans" className="py-5">
                <div>
                    <h4 className="mb-5">Planos</h4>
                    <div className="d-flex justify-content-center">
                        <div className="plans-row">
                            {plans.map((plan) => {
                                return <PlanItem plan={plan} onPlanSelect={handlePlanSelect} />;
                            })}
                        </div>
                    </div>
                </div>
            </section>

            <section id="testimonials" className="container-fluid">
                <div className="container">
                    <div className="mb-4">
                        <h2>Quem usa recomenda!</h2>
                        <h1>Depoimentos</h1>
                    </div>
                    <div id="caroselFrame">
                        <div id="carouselControls" className="carousel slide" data-ride="carousel">
                            <div className="carousel-inner">
                                <TestItem status="active" />
                            </div>
                            <div className="carouselControllers">
                                <a href="#carouselControls" role="button" data-slide="prev">
                                    <i class="fas fa-angle-left"></i>
                                </a>
                                <a href="#carouselControls" role="button" data-slide="next">
                                    <i class="fas fa-angle-right"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="faq" className="container-fluid">
                <div className="container">
                    <div className="container-fluid text-center">
                        <h4>Dúvidas?</h4>
                        <div className="text-left mt-5 shadow">
                            <Faq data={data} styles={styles} config={config} />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;
