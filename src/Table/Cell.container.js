import Cell from './Cell';
import { editCell, commitCell } from './Cell.reducer';
import { connect } from 'react-redux';

const mapStateToProps = (state, props) => ({
  isEditing: (col) => state.table && state.table.cell && state.table.cell.isEditing && state.table.cell.row === props.row && state.table.cell.col === col
});

const mapDispatchToProps = {
  onEdit: editCell,
  onCommit: commitCell
};

const CellContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Cell);

export default CellContainer;
