import React from 'react';

const DisplayPlan = ({ value, onEdit }) => (
  <td onDoubleClick={() => onEdit()}>{value}</td>
);

export default DisplayPlan;
