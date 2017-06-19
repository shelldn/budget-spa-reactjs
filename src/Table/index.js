import React, { Children, cloneElement } from 'react';
import Head from './Head';
import Body from './Body';
import Row from './Row';
import Cell from './Cell';
import './Table.css';

const Table = ({ children }) => {
  let rowBias = 0;
  return (
    <table className="table">
      {Children.map(children, c => {
        const body = cloneElement(c, { rowBias });
        rowBias += Children.count(c.props.children);
        return body;
      })}
    </table>
  );
}

export default Table;

export { Head, Body, Row, Cell };
