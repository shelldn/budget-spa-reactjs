import React from 'react';
import { EditPlanModel } from './index.js';
import EditPlan from './EditPlan';
import DisplayPlan from './DisplayPlan';
import { EditFactModel } from './index.js';
import EditFact from './EditFact';
import DisplayFact from './DisplayFact';

const edit = (o, editPlan, editFact) => [
  o.plan instanceof EditPlanModel
    ? <EditPlan {...o} />
    : <DisplayPlan value={o.plan} onEdit={() => editPlan(o)} />,

  o.fact instanceof EditFactModel
    ? <EditFact {...o} />
    : <DisplayFact value={o.fact} onEdit={() => editFact(o)} />
];

export default edit;
