import React, { Children, cloneElement } from 'react';

const Body = ({ rowBias, children }) => {
  return (
    <tbody>
      {Children.map(children, (c, idx) => cloneElement(c, { id: rowBias + idx }))}
    </tbody>
  );
}

export default Body;
