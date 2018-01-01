import React from 'react';
import { EditPlanModel } from './index.js';
import EditPlan from './EditPlan';
import DisplayPlan from './DisplayPlan';
import { EditFactModel } from './index.js';
import EditFact from './EditFact';
import DisplayFact from './DisplayFact';

const edit = (o, editPlan, editFact, editPlanCommit, editFactCommit) => [
  o.plan instanceof EditPlanModel
    ? <EditPlan value={o.plan.value} onCommit={plan => editPlanCommit(o.id, plan, o.fact)} />
    : <DisplayPlan value={o.plan} onEdit={() => editPlan(o)} />,

  o.fact instanceof EditFactModel
    ? <EditFact value={o.fact.value} onCommit={fact => editFactCommit(o.id, o.plan, fact)} />
    : <DisplayFact value={o.fact} onEdit={() => editFact(o)} />
];

export default edit;
