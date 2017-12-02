import React from 'react';

const DisplayCategory = ({
  id,
  name,
  editCategory,
  deleteCategory
}) => (
  <div>
    {name}
    <a onClick={() => editCategory(id)}>
      <i className="fa fa-pencil-square-o"></i>
    </a>
    <a onClick={() => deleteCategory(id)}>
      <i className="fa fa-trash-o"></i>
    </a>
  </div>
);

export default DisplayCategory;
