import React from 'react';
import { connect } from 'react-redux';
import './Row.css';

let Row = ({ selected, children }) => (
  <tr className={selected && 'row row--selected'}>
    {children}
  </tr>
)

const mapStateToProps = (state, props) => ({
  selected: state.table.row === props.rowId
});

Row = connect(
  mapStateToProps
)(Row);

export default Row;
