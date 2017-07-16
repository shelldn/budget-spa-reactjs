import React, { Component } from 'react';
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
      isEditing,
      editor,
      selected,
      row,
      value,
      children,
      onEdit,
      ...props
    } = this.props;

    const Display = () => (
      <td
        onDoubleClick={() => onEdit(row, this._col, value)}
        {...props}
      >
        {children}
      </td>
    )
  
    const Editor = editor;

    const Edit = () => (
      <td {...props}>
        <Editor />
      </td>
    )

    return isEditing(this._col) ? <Edit /> : <Display />;
  }
}

export default Cell;
