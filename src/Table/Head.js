import React, { Children, cloneElement } from 'react';

const Head = ({ rowBias, children }) => (
  <thead>
    {Children.map(children, (c, idx) => cloneElement(c, { id: rowBias + idx }))}
  </thead>  
)

export default Head;
