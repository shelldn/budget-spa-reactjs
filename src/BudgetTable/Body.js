import React from 'react';
import AddCategory from './AddCategory';
import EditCategory from './EditCategory';

const createIfNotExists = (operations, categoryId, month) => (
  operations.find(o => o.categoryId === categoryId && o.month === month) || {
    plan: 0,
    fact: 0
  }
)

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

const Body = ({
  months,
  categories,
  category,
  operations,
  addCategory,
  addCategoryCommit,
  editCategory,
  editCategoryCommit,
  deleteCategory
}) => (

  <tbody>
    <tr>
      <td></td>
      {months.map(() => [
        <td>0</td>,
        <td>0</td>
      ])}
    </tr>
    {categories.map(c => 
      <tr key={c.id}>
        <td>
          {c.isEditing
              ? <EditCategory {...c} onSubmit={editCategoryCommit} />
              : <DisplayCategory {...c} editCategory={editCategory} deleteCategory={deleteCategory} />}
        </td>
        {months.map(m => createIfNotExists(operations, c.id, m)).map(o => [
          <td>{o.plan}</td>,
          <td>{o.fact}</td>
        ])}
      </tr>
    )}
    <tr>
      <td>
        {category
            ? <AddCategory onSubmit={addCategoryCommit} />
            : <a href="javascript:void(0)" onClick={() => addCategory()}>Add category</a>}
      </td>
    </tr>
  </tbody>

);

export default Body;
