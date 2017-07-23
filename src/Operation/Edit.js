import React from 'react';

let Edit = ({
  id,
  type,
  value,
  onChange,
  onCommit
}) => (
  <form onSubmit={() => onCommit(this.input.value)}>
    <input
      ref={i => this.input = i}
      autoFocus
      value={value}
      onChange={e => onChange(e.target.value)}
    />
  </form>
);

export default Edit;
