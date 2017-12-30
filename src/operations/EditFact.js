import React from 'react';

const EditFact = ({ fact }) => (
  <td>
    <input
      autoFocus
      type="text"
      defaultValue={fact.value}
    />
  </td>
);

export default EditFact;

