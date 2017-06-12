import React, { Component } from 'react';
import { connect } from 'react-redux';

class EditEditIncomeCategory extends Component {

  componentDidMount() {
    this.input.focus();
    this.input.select();
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.commit(this.props.id, this.props.name);
  }

  render() {

    const { id, name, edit } = this.props;

    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <input
          ref={i => this.input = i}
          type="text"
          value={name}
          onChange={e => edit(e.target.value)}
        />
      </form>
    )
  }
}

const mapStateToProps = (state) => ({

  id: state.categories.edit.id,
  name: state.categories.edit.name

});

const mapDispatchToProps = (dispatch) => ({

  edit: (newName) => dispatch({
    type: 'budget-io/categories/to_edit/EDIT',
    payload: {
      newName
    }
  }),

  commit: (id, newName) => dispatch({
    type: 'budget-io/categories/to_edit/COMMIT',
    payload: {
      id,
      newName
    }
  })

});

EditEditIncomeCategory = connect(
  mapStateToProps,
  mapDispatchToProps
)(EditEditIncomeCategory);

export default EditEditIncomeCategory;
