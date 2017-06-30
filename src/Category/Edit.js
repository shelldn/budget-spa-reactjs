import React from 'react';
import { connect } from 'react-redux';

let Edit = ({
  name,
  onChange
}) => (

  <form>
    <input
      autoFocus
      value={name}
      onChange={e => onChange(e.target.value)}
    />
  </form>
)

const mapStateToProps = (state) => ({
  name: state.categories.edit.name
});

const mapDispatchToProps = (dispatch) => ({
  onChange: (id, newName) => dispatch({
    type: 'budget-io/categories/to_edit/EDIT',
    payload: {
      id,
      newName
    }
  })
})

Edit = connect(
  mapStateToProps,
  mapDispatchToProps
)(Edit);

export default Edit;
