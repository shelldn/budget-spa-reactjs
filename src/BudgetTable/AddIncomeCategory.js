import React from 'react';
import { connect } from 'react-redux';

let EditAddIncomeCategory = ({ name, edit }) => (
  <input autoFocus
    placeholder="New category name"
    type="text"
    value={name}
    onChange={e => edit(e.target.value)}
  />
)

const mapDispatchToProps = (dispatch) => ({

  edit: (newName) => dispatch({
    type: 'budget-io/categories/to_add/EDIT',
    payload: {
      newName
    }
  })

});

EditAddIncomeCategory = connect(
  null,
  mapDispatchToProps
)(EditAddIncomeCategory);

const AddIncomeCategory = ({ categoryToAdd, onClick }) => {

  const handleClick = (e) => {
    e.preventDefault();
    onClick();
  };

  return (
    <tr>
      <td>
        {categoryToAdd
          ? <EditAddIncomeCategory {...categoryToAdd} />
          : <a href="#" onClick={handleClick}>Add Category</a>}
      </td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
  );    
}

export default AddIncomeCategory;
