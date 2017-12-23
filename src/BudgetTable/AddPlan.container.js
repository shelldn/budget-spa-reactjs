import { connect } from 'react-redux';
import AddOperation from './AddOperation';
import { addPlanCommit } from '../operations';

const mapStateToProps = (state) => ({
  categoryId: state.operations.find(o => !o.id).categoryId
});

const mapDispatchToProps = ({
  onSubmit: addPlanCommit
});

const AddPlanContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddOperation);

export default AddPlanContainer;
