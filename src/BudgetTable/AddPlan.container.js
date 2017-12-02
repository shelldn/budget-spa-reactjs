import { connect } from 'react-redux';
import AddPlan from './AddPlan';
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
)(AddPlan);

export default AddPlanContainer;
