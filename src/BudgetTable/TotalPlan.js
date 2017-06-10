import React from 'react';
import { total } from './Total';

const Total = ({ value }) => (
  <th className="budget__total--plan">{value}</th>
)

const TotalPlan = total(Total, 'plan');

export default TotalPlan;
