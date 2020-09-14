import React from "react";
import { Link } from "react-router-dom";
import { planService } from "../../../services/PlanService";

function Description() {
  var plans = planService.getPlans();
  return (
    <section className="container-fluid">
      <h1 className="text-center">Qual a sua melhor opção?</h1>
      <h2 className="pt-3">Conheça nossos planos</h2>

      {plans.map((item) => {
        return (
          <div className="plans-headers" key={item.type}>
            <div className="row">
              <div className="col-5 text-left pl-5">
                <span className="coin">R$</span>
                <span className="price">
                  {parseFloat(item.price).toFixed(2)}
                </span>
                <span className="pertime">
                  {" "}
                  / {item.period === "A" ? "Ano" : "Mês"}
                </span>
                <div className="plans">
                  <Link to={"/assinar/" + item.type}>
                    <div className="btn btn-plans">Assinar</div>
                  </Link>
                </div>
              </div>
              <div className="col-7 pr-5">
                <h2>{item.name}</h2>
                <h5>{item.description}</h5>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}

export default Description;
