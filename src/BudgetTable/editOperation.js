import React from 'react';
import {
  EditPlanModel,
  EditFactModel
} from '../operations';

const EditPlan = ({ plan }) => (
  <td>
    <input
      autoFocus
      type="text"
      defaultValue={plan.value}
    />
  </td>
);

const EditFact = ({ fact }) => (
  <td>
    <input
      autoFocus
      type="text"
      defaultValue={fact.value}
    />
  </td>
);

const DisplayPlan = ({ plan }) => (
  <td>{plan}</td>
);

const DisplayFact = ({ fact }) => ( 
  <td>{fact}</td>
);

const editOperation = (o) => [
  o.plan instanceof EditPlanModel ? <EditPlan {...o} /> : <DisplayPlan {...o} />,
  o.fact instanceof EditFactModel ? <EditFact {...o} /> : <DisplayFact {...o} />
];

export default editOperation;
