import React from 'react';
import DisplayCategory from './DisplayCategory';
import AddCategory from './AddCategory';
import EditCategory from './EditCategory';
import AddPlan from './AddPlan.container';
import AddFact from './AddFact.container';
import {
  InitOperation,
  InitPlan,
  InitFact
} from '../operations';

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
  deleteCategory,
  addPlan,
  addFact
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

        {months.map(m => {
          const operation = operations
            .find(o => o.categoryId === c.id && o.month === m);

          if (operation instanceof InitOperation)
            return [
              <td>
                {operation.plan instanceof InitPlan ? <AddPlan value={operation.plan.value} /> : 0}
              </td>,
              <td>
                {operation.fact instanceof InitFact ? <AddFact value={operation.fact.value} /> : 0}
              </td>
            ];

          else if (operation == null)
            return [
              <td onDoubleClick={() => addPlan(c.id, m)}>0</td>,
              <td onDoubleClick={() => addFact(c.id, m)}>0</td>
            ];

          else return [
            <td>{operation.plan}</td>,
            <td>{operation.fact}</td>
          ];
        })}
      </tr>
    )}
    <tr>
      <td>
        {category
            ? <AddCategory onSubmit={name => addCategoryCommit(type, name)} />
            : <a onClick={() => addCategory(type)}>Add category</a>}
      </td>
      {months.map(m => [
        <td></td>,
        <td></td>
      ])}
    </tr>
  </tbody>

);

export default Body;
