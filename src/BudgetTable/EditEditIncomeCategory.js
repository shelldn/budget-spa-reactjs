import React, { Component } from 'react';
import { connect } from 'react-redux';

class EditEditIncomeCategory extends Component {

  componentDidMount() {
    this.input.focus();
    this.input.select();
  }

  render() {

    const { name, edit } = this.props;

    return (
      <input
        ref={i => this.input = i}
        type="text"
        value={name}
        onChange={e => edit(e.target.value)}
      />
    )
  }
}

const mapStateToProps = (state) => ({

  name: state.categories.edit.name

});

const mapDispatchToProps = (dispatch) => ({

  edit: (newName) => dispatch({
    type: 'budget-io/categories/to_edit/EDIT',
    payload: {
      newName
    }
  })

});

EditEditIncomeCategory = connect(
  mapStateToProps,
  mapDispatchToProps
)(EditEditIncomeCategory);

export default EditEditIncomeCategory;
