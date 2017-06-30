import React from 'react';
import Edit from './Edit';

const value = (type) => ({
  id,
  editId,
  editType,
  value,
  onEdit
}) => {

  const isEditing =
    id === editId &&
    type === editType;

  const handleDoubleClick = () => onEdit(id, type, value);

  return isEditing
    ? <Edit />
    : <span onDoubleClick={handleDoubleClick}>{value}</span>
}

export const Plan = value('plan');
export const Fact = value('fact');
