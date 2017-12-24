import Body from './Body';
import {
  addCategory,
  addCategoryCommit,
  editCategory,
  editCategoryCommit,
  deleteCategory
} from '../categories';
import {
  addPlan,
  addFact
} from '../operations';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  type: 'outgo',
  months: state.months,
  categories: state.categories.filter(c => c.type === 'outgo' && !!c.id),
  category: state.categories.find(c => c.type === 'outgo' && !c.id),
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

const OutgoBody = connect(
  mapStateToProps,
  mapDispatchToProps
)(Body);

export default OutgoBody;
