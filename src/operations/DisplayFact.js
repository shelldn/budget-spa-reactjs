import React from 'react';

const DisplayFact = ({ value, onEdit }) => ( 
  <td onDoubleClick={onEdit}>{value}</td>
);

export default DisplayFact;
