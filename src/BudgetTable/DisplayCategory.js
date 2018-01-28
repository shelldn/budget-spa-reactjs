import React from 'react';
import './Category.css';

const DisplayCategory = ({
  id,
  name,
  editCategory,
  deleteCategory
}) => (
  <div className="category">
    {name}
    <div className="category__edit-buttons">
      <a onClick={() => editCategory(id)}>
        <i className="fa fa-pencil-square-o"></i>
      </a>
      <a onClick={() => deleteCategory(id)}>
        <i className="fa fa-trash-o"></i>
      </a>
    </div>
  </div>
);

export default DisplayCategory;
