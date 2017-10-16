import Body from './Body';
import { addCategory, addCategoryCommit, deleteCategory } from '../categories';
import { connect } from 'react-redux';

const filter = (categories) => categories
  .filter(c => c.type === 'income' && c.id > 0);
  
const mapStateToProps = (state) => ({
  months: state.months,
  categories: filter(state.categories),
  category: state.categories.find(c => c.type === 'income' && c.id < 0),
  operations: state.operations
});

const mapDispatchToProps = ({
  addCategory,
  addCategoryCommit,
  deleteCategory
});

const IncomeBody = connect(
  mapStateToProps,
  mapDispatchToProps
)(Body);

export default IncomeBody;
