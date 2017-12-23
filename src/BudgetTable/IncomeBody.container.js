import Body from './Body';
import {
  addCategory,
  addCategoryCommit,
  editCategory,
  editCategoryCommit,
  deleteCategory
} from '../categories';
import { addPlan, addFact } from '../operations';
import { connect } from 'react-redux';

const filter = (categories) => categories
  .filter(c => c.type === 'income' && !!c.id);
  
const mapStateToProps = (state) => ({
  type: 'income',
  months: state.months,
  categories: filter(state.categories),
  category: state.categories.find(c => c.type === 'income' && !c.id),
  operations: state.operations
});

const mapDispatchToProps = ({
  addCategory,
  addCategoryCommit,
  editCategory,
  editCategoryCommit,
  deleteCategory,
  addPlan,
  addFact
});

const IncomeBody = connect(
  mapStateToProps,
  mapDispatchToProps
)(Body);

export default IncomeBody;
