import { connect } from 'react-redux';
import AddOperation from './AddOperation';
import { addPlanCommit, InitOperation } from '../operations';

const mapStateToProps = (state) => ({
  categoryId: state.operations.find(o => o instanceof InitOperation).categoryId,
  month: state.operations.find(o => o instanceof InitOperation).month
});

const mapDispatchToProps = ({
  onSubmit: addPlanCommit
});

const AddPlanContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddOperation);

export default AddPlanContainer;
