import React from "react";

/**
    {
        name: '',
        type: 'redplay',
        period: 'A',
        price: '',
        details: [
            {feature: '', desc: ''}
        ]
    }
*/

function PlanItem(props) {
    const { plan, onPlanSelect } = props;

    const [firstPrice, lastPrice] = plan.price.toString().split(".");

    return (
        <div className="plans-columns">
            <div className="price-top">
                <div className={"title " + plan.type}>
                    <div dangerouslySetInnerHTML={{ __html: plan.displayName.toUpperCase() }} />
                </div>
                <div className="price">
                    <span>R$ </span>
                    <span>{firstPrice},</span>
                    <span>
                        {lastPrice} /{plan.period == "A" ? "ano" : "mês"}
                    </span>
                </div>
            </div>
            <div className="plan-detail">
                <ul>
                    {plan.details.map((item) => {
                        return (
                            <li>
                                <span>{item.feature}</span> {item.desc}
                            </li>
                        );
                    })}
                </ul>
                <div className="text-center">
                    <button onClick={() => onPlanSelect(plan)} className="btn btn-plans">
                        Assinar
                    </button>
                </div>
            </div>
        </div>
    );
}

export default PlanItem;