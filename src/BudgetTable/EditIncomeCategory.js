import React from 'react';

const EditIncomeCategory = ({ id, name, onEdit }) => (
  <td>
    <input type="text" value={name} onChange={e => onEdit(id, e.target.value)} />
  </td>
)

export default EditIncomeCategory;
