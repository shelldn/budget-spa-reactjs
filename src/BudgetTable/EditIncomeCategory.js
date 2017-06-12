import React from 'react';
import EditEditIncomeCategory from './EditEditIncomeCategory';
import { connect } from 'react-redux';

let EditIncomeCategory = ({ isEditing, category, edit }) => (
  <td>
    {isEditing
      ? <EditEditIncomeCategory />
      : <span onDoubleClick={() => edit(category.id, category.name)}>{category.name}</span>}
  </td>
)

const mapStateToProps = (state, props) => ({

  isEditing: state.categories.edit && state.categories.edit.id === props.id,
  category: state.categories.list.find(c => c.id === props.id)

});

const mapDispatchToProps = (dispatch) => ({

  edit: (id, name) => dispatch({
    type: 'budget-io/categories/EDIT',
    payload: {
      id,
      name
    }
  })

});

EditIncomeCategory = connect(
  mapStateToProps,
  mapDispatchToProps
)(EditIncomeCategory);

export default EditIncomeCategory;
