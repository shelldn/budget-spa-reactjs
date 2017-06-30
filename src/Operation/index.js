import React from 'react';

const Edit = ({ value }) => (
  <input
    autoFocus
    value={value}
  />
)

const value = (type) => ({ id, editId, editType, value, onEdit }) => (
  id === editId && type === editType
    ? <Edit />
    : <span onDoubleClick={() => onEdit(id, type)}>{value}</span>
)

export const Plan = value('plan');
export const Fact = value('fact');
