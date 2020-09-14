import React from "react";
import { Link, useParams } from "react-router-dom";
import { planService } from "../../../services/PlanService";

export default function Subscribe() {
    let { type } = useParams();
    // console.log(type);

    const planDetails = planService.getPlanByType(type);
    // console.log(planDetails.payUrl[0].mp)
    return (
        <>
            <section className="container-fluid">
                <div className="container">
                    <h1>Assine e venha fazer parte!</h1>
                    <div className="subscribe">
                        <div className="rh-dark">Confira os dados do plano escolhido</div>
                        <table class="table">
                            <thead class="thead-dark">
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Item</th>
                                    <th scope="col">Periodo</th>
                                    <th scope="col">Preço</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>{planDetails.displayName}</td>
                                    <td>{planDetails.period == "A" ? "Anual" : "Mensal"}</td>
                                    <td>R$ {planDetails.price}</td>
                                </tr>
                            </tbody>
                        </table>
                        <div>
                            <Link to="/assinar">
                                Mudar Plano
                            </Link>
                        </div>

                        <div className="payment-type">
                            <div className="rh-dark text-center">Escolha a plataforma de pagamento</div>
                            <div className="row">
                                <div className="col text-center">
                                    <a href={planDetails.payUrl[0].mp} target="_blank">
                                        <img className="pLogo" src="/assets/images/mercado-pago-logo.png" alt="" />
                                    </a>
                                </div>
                                <div className="col text-center">
                                    <a href={planDetails.payUrl[0].pp} target="_blank">
                                        <img className="pLogo" src="/assets/images/picpay-logo.png" alt="" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
