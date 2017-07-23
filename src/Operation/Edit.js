import React from 'react';

let Edit = ({
  id,
  type,
  value,
  onChange,
  onCommit
}) => (
  <form onSubmit={() => onCommit()}>
    <input
      autoFocus
      value={value}
      onChange={e => onChange(e.target.value)}
    />
  </form>
);

export default Edit;
