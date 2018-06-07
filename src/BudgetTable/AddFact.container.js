import { connect } from 'react-redux';
import AddOperation from './AddOperation';
import { addFactCommit } from '../operations';

const mapDispatchToProps = ({
  onSubmit: addFactCommit
});

const AddPlanContainer = connect(
  undefined,
  mapDispatchToProps
)(AddOperation);

export default AddPlanContainer;
