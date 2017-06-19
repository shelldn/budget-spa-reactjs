import React, { Children, cloneElement } from 'react';
import Body from './Body';
import Row from './Row';

const Table = ({ children }) => {
  let rowBias = 0;
  return (
    <table>
      {Children.map(children, c => {
        const body = cloneElement(c, { rowBias });
        rowBias += Children.count(c.props.children);
        return body;
      })}
    </table>
  );
}

export default Table;

export { Body, Row };
