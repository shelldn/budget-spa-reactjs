import React from 'react';
import DisplayCategory from './DisplayCategory';
import AddCategory from './AddCategory';
import EditCategory from './EditCategory';

const createIfNotExists = (operations, categoryId, month) => (
  operations.find(o => o.categoryId === categoryId && o.month === month) || {
    plan: 0,
    fact: 0
  }
);

const Body = ({
  type,
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
            ? <AddCategory onSubmit={name => addCategoryCommit(type, name)} />
            : <a href="javascript:void(0)" onClick={() => addCategory(type)}>Add category</a>}
      </td>
      {months.map(m => [
        <td></td>,
        <td></td>
      ])}
    </tr>
  </tbody>

);

export default Body;
