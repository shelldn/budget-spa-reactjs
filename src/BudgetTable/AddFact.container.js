import { connect } from 'react-redux';
import AddOperation from './AddOperation';
import { addFactCommit } from '../operations';

const mapStateToProps = (state) => ({
  categoryId: state.operations.find(o => !o.id).categoryId
});

const mapDispatchToProps = ({
  onSubmit: addFactCommit
});

const AddPlanContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddOperation);

export default AddPlanContainer;
