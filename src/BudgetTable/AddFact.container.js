import { connect } from 'react-redux';
import AddPlan from './AddPlan';
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
)(AddPlan);

export default AddPlanContainer;
