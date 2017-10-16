import Body from './Body';
import { addCategory, deleteCategory } from './IncomeBody.reducer';
import { connect } from 'react-redux';

const filter = (categories) => categories
  .filter(c => c.type === 'income');
  
const mapStateToProps = (state) => ({
  months: state.months,
  categories: filter(state.categories),
  operations: state.operations
});

const mapDispatchToProps = ({
  addCategory,
  deleteCategory
});

const IncomeBody = connect(
  mapStateToProps,
  mapDispatchToProps
)(Body);

export default IncomeBody;
