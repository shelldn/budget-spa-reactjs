import React from 'react';
import { connect } from 'react-redux';
import './Cell.css';

let Cell = ({ selected, colSpan, children, onSelect }) => (
  <td
    colSpan={colSpan}
    className={`cell${selected ? ' cell--selected' : ''}`}
    onClick={onSelect}
  >
    {children}
  </td>
)

const mapStateToProps = (state, props) => ({
  selected: state.table.row === props.row && state.table.col === props.col
});

const mapDispatchToProps = (dispatch, props) => ({
  onSelect: () => dispatch({
    type: 'budget-io/table/cell/SELECT',
    payload: {
      row: props.row,
      col: props.col
    }
  })
});

Cell = connect(
  mapStateToProps,
  mapDispatchToProps
)(Cell);

export default Cell;
