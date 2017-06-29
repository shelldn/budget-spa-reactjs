import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Cell.css';

let idx = 0;

export const resetIdx = () => idx = 0;

class Cell extends Component {

  constructor(props) {
    super(props);
    this._col = idx++;
  }

  render() {
    const {
      className,
      selected,
      row,
      colSpan,
      children,
      onSelect
    } = this.props;

    const isSelected = selected.row === row && selected.col === this._col;

    return (
      <td
        colSpan={colSpan}
        className={`cell${isSelected ? ' cell--selected' : ''} ${className}`}
        onClick={() => onSelect(this._col)}
      >
        {children}
      </td>
    );
  }
}

const mapStateToProps = (state, props) => {
  return { 
    selected: state.table
  };
}

const mapDispatchToProps = (dispatch, props) => ({
  onSelect: (col) => dispatch({
    type: 'budget-io/table/cell/SELECT',
    payload: {
      row: props.row,
      col
    }
  })
});

Cell = connect(
  mapStateToProps,
  mapDispatchToProps
)(Cell);

export default Cell;
