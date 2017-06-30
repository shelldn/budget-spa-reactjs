import React from 'react';
import { change, commit } from './Edit.reducer';
import { connect } from 'react-redux';

let Edit = ({
  id,
  type,
  value,
  change,
  commit
}) => {

  const handleSubmit = () => commit(id, type, value);

  return (
    <form onSubmit={handleSubmit}>
      <input
        autoFocus
        value={value}
        onChange={e => change(e.target.value)}
      />
    </form>
  );
}

const mapStateToProps = (state) => ({
  id: state.edit.id,
  type: state.edit.type,
  value: state.edit.value
})

const mapDispatchToProps = {
  change,
  commit
};

Edit = connect(
  mapStateToProps,
  mapDispatchToProps
)(Edit);

export default Edit;
