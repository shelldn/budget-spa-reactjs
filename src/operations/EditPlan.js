import React from 'react';

const EditPlan = ({ plan }) => (
  <td>
    <input
      autoFocus
      type="text"
      defaultValue={plan.value}
    />
  </td>
);

export default EditPlan;
