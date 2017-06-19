import React from 'react';
import { connect } from 'react-redux';
import './Cell.css';

let Cell = ({ selected, children }) => (
  <td className={selected && 'cell cell--selected'}>{children}</td>
)

const mapStateToProps = (state, props) => ({
  selected: state.table.row === props.row && state.table.col === props.col
});

Cell = connect(
  mapStateToProps
)(Cell);

export default Cell;
