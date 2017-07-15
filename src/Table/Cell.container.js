import Cell from './Cell';
import { editCell } from './Cell.reducer';
import { connect } from 'react-redux';

const mapStateToProps = (state, props) => ({
  isEditing: (col) => state.table && state.table.cell && state.table.cell.row === props.row && state.table.cell.col === col
});

const mapDispatchToProps = {
  onEdit: editCell
};

const CellContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Cell);

export default CellContainer;
