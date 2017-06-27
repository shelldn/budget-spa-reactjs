import React from 'react';
import Body from './Body';
import Row from './Row';
import Cell from './Cell';
import './Table.css';

const Table = ({ children }) => (
  <table className="table">
    {children}
  </table>
)

export default Table;

export { Body, Row, Cell };
