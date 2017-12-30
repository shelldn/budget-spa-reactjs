import React from 'react';
import { EditPlanModel } from './index.js';
import EditPlan from './EditPlan';
import DisplayPlan from './DisplayPlan';

const Plan = o => o.plan instanceof EditPlanModel
  ? <EditPlan {...o} />
  : <DisplayPlan value={o.plan} />

export default Plan;
