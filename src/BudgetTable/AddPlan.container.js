import { connect } from 'react-redux';
import AddOperation from './AddOperation';
import { addPlanCommit } from '../operations';

const mapDispatchToProps = ({
  onSubmit: addPlanCommit
});

const AddPlanContainer = connect(
  undefined,
  mapDispatchToProps
)(AddOperation);

export default AddPlanContainer;
