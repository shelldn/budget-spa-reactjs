import React from 'react';

const Edit = ({ id, type, value, onChange, onCommit }) => (
  <input
    autoFocus
    value={value}
    onChange={e => onChange(id, type, e.target.value)}
    onKeyPress={e => { if (e.key === 'Enter') onCommit(id, type, value); }}
  />
)

const value = (type) => ({ id, editId, editType, editValue, value, onEdit, onChange, onCommit }) => (
  id === editId && type === editType
    ? <Edit id={id} type={type} value={editValue} onChange={onChange} onCommit={onCommit} />
    : <span onDoubleClick={() => onEdit(id, type, value)}>{value}</span>
)

export const Plan = value('plan');
export const Fact = value('fact');
