import React from 'react';
import Display from './Display';
import Edit from './Edit';

const Category = ({
  editId,
  ...category
}) => {

  const isEditing = editId === category.id;

  return (
    isEditing
      ? <Edit />
      : <Display {...category} />
  );
}

export default Category;
