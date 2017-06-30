import React from 'react';
import { change, commit } from './Edit.reducer';
import { connect } from 'react-redux';

let Edit = ({
  id,
  type,
  value,
  onChange,
  onCommit
}) => {

  const handleSubmit = () => onCommit(id, type, value);

  return (
    <form onSubmit={handleSubmit}>
      <input
        autoFocus
        value={value}
        onFocus={e => e.target.select()}
        onChange={e => onChange(e.target.value)}
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
  onChange: change,
  onCommit: commit
};

Edit = connect(
  mapStateToProps,
  mapDispatchToProps
)(Edit);

export default Edit;
