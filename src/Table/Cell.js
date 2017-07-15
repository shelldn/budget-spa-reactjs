import React, { Component } from 'react';
import { editCell } from './Cell.reducer';
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
      selected,
      row,
      children,
      onEdit,
      ...props
    } = this.props;

    const Display = () => (
      <td
        onDoubleClick={() => onEdit(row, this._col)}
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

    return <Display />;
  }
}

const mapDispatchToProps = {
  onEdit: editCell
};

Cell = connect(
  null,
  mapDispatchToProps
)(Cell);

export default Cell;
