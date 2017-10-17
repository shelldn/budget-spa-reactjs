import React from 'react';

const DisplayCategory = ({
  id,
  name,
  editCategory,
  deleteCategory
}) => (
  <div>
    {name}
    <a href="javascript:void(0)" onClick={() => editCategory(id)}>
      <i className="fa fa-pencil-square-o"></i>
    </a>
    <a href="javascript:void(0)" onClick={() => deleteCategory(id)}>
      <i className="fa fa-trash-o"></i>
    </a>
  </div>
);

export default DisplayCategory;
