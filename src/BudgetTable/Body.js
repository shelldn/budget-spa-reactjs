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

class EditCategory extends Component {

  componentDidMount() {
    this.input.select();
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.props.id, this.input.value);
  }

  render() {
    return (

      <form onSubmit={this.handleSubmit}>
        <input
          ref={i => this.input = i}
          autoFocus
          defaultValue={this.props.name}
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
