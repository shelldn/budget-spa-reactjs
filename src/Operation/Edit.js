import React from 'react';

let Edit = ({
  id,
  type,
  value,
  onChange,
  onCommit
}) => (
  <form onSubmit={() => onCommit(id, type, value)}>
    <input
      autoFocus
      value={value}
      onChange={e => onChange(e.target.value)}
    />
  </form>
);

export default Edit;
