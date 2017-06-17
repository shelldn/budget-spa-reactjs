import React from 'react';
import Body from './Body';
import Row from './Row';

const Table = ({ children }) => (
  <table>
    {children}
  </table>    
)

export default Table;

export { Body, Row };
