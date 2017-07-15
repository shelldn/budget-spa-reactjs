import React from 'react';
import Body from './Body';
import Row from './Row';
import Cell from './Cell.container';
import cellReducer from './Cell.reducer';
import { combineReducers } from 'redux';
import './Table.css';

const Table = ({ children }) => {
  return (
    <table className="table">
      {children}
    </table>
  );
}

export default Table;

export { Body, Row, Cell };

export const reducer = combineReducers({
  cell: cellReducer
});
