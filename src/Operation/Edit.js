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
      onFocus={e => e.target.select()}
      onChange={e => onChange(e.target.value)}
    />
  </form>
);

export default Edit;
