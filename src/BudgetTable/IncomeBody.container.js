import Body, { getTotals } from './Body';
import {
  addCategory,
  addCategoryCommit,
  editCategory,
  editCategoryCommit,
  deleteCategory
} from '../categories';
import {
  addPlan,
  addFact,
  editPlan,
  editFact,
  editPlanCommit,
  editFactCommit
} from '../operations';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  const months = state.months;
  const categories = state.categories.filter(c => c.type === 'income' && !!c.id);
  const operations = state.operations.filter(o => categories.some(c => c.id === o.categoryId));

  return {
    type: 'income',
    months: state.months,
    category: state.categories.find(c => c.type === 'income' && !c.id),
    categories,
    operations,
    totals: getTotals(operations, months)
  }
};

const mapDispatchToProps = ({
  addCategory,
  addCategoryCommit,
  editCategory,
  editCategoryCommit,
  deleteCategory,
  addPlan,
  addFact,
  editPlan,
  editFact,
  editPlanCommit,
  editFactCommit
});

const IncomeBody = connect(
  mapStateToProps,
  mapDispatchToProps
)(Body);

export default IncomeBody;
