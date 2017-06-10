import React from 'react';
import { total } from './Total';

const Total = ({ value }) => (
  <th className="budget__total--fact">{value}</th>
)

export default total(Total, 'fact');
