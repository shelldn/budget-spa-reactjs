import React, { Component } from 'react';
import DisplayCategory from './DisplayCategory';
import AddCategory from './AddCategory';
import EditCategory from './EditCategory';

class AddPlan extends Component {

  componentDidMount() {
    this.input.select();
  }

  render() {
    return (
      <form>
        <input
          ref={i => this.input = i}
          autoFocus
          type="text"
          defaultValue={this.props.value}
        />
      </form>
    );
  }
}

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
  addPlan
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
          const operation = operations.find(o => o.categoryId === c.id && o.month === m);

          if (operation == null)
            return [
              <td onDoubleClick={() => addPlan(c.id, m)}>0</td>,
              <td>0</td>
            ];
          else if (!operation.id)
            return [
              <td>
                {operation.plan === 0
                    ? <AddPlan value={operation.plan} />
                    : 0}
              </td>,
              <td>{operation.fact}</td>
            ];
        })}
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
