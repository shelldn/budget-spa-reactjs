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
      contentId,
      editor,
      className,
      selected,
      row,
      children,
      onSelect,
      onEdit,
      ...props
    } = this.props;

    const isSelected = selected.row === row && selected.col === this._col;
    const isEditing = editor && isSelected && selected.isEditing;

    const handleClick = e => {
      onSelect(this._col);
    }

    const Display = () => (
      <td
        className={`cell${isSelected ? ' cell--selected' : ''} ${className}`}
        onClick={handleClick}
        onDoubleClick={() => onEdit(this._col)}
        {...props}
      >
        {children}
      </td>
    )
  
    const Editor = editor;

    const Edit = () => (
      <td
        className={`cell${isSelected ? ' cell--selected' : ''} ${className}`}
        {...props}
      >
        <Editor />
      </td>
    )

    return isEditing ? <Edit /> : <Display />;
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
  }),

  onEdit: (col) => dispatch({
    type: 'budget-io/table/cell/EDIT',
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
