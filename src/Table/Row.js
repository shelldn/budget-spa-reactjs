import React, { Children, cloneElement } from 'react';

const Row = ({ id, children }) => (
  <tr>
    {Children.map(children, (c, col) => cloneElement(c, { row: id, col }))}
  </tr>
)

export default Row;
