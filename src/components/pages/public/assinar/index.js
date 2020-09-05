import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { planService } from '../../../../services/PlanService';

function Assinar(props) {
    const [plan, setPlan] = useState();

    const type = props.match.params.type;
    useEffect(() => {
        const result = planService.getPlanByType(type);
        setPlan(result);
    }, [type]);

    if (!plan) {
        return null;
    }

    return <b>{plan.name}</b>;
}

export default withRouter(Assinar);