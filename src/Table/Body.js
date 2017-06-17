import React, { Children, cloneElement } from 'react';

const Body = ({ children }) => {
  return (
    <tbody>
      {Children.map(children, (c, rowId) => cloneElement(c, { rowId }))}
    </tbody>
  );
}

export default Body;
