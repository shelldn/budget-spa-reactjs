import React, { Component } from 'react';

const createIfNotExists = (operations, categoryId, month) => (
  operations.find(o => o.categoryId === categoryId && o.month === month) || {
    plan: 0,
    fact: 0
  }
)

class AddCategory extends Component {

  handleSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(this.input.value);
  }

  render() {

    return (

      <form onSubmit={this.handleSubmit.bind(this)}>
        <input
          autoFocus
          ref={i => this.input = i}
        />
      </form>
    );
  }
}

const Body = ({
  months,
  categories,
  category,
  operations,
  addCategory,
  addCategoryCommit,
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
          {c.name}
          <a href="javascript:void(0)" onClick={() => deleteCategory(c.id)}>
            <i className="fa fa-trash-o"></i>
          </a>
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
