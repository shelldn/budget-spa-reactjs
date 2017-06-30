import React from 'react';

const Display = ({ id, name, onEdit }) => (
  <span
    onDoubleClick={() => onEdit(id, name)}
  >
    {name}
  </span>
)

export default Display;
