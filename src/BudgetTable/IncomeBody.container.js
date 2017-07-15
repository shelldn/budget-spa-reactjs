import IncomeBody from './IncomeBody';
import { connect } from 'react-redux';

const filter = (categories) => categories
  .filter(c => c.type === 'income');
  
const sort = (categories) => categories
  .sort((a, b) => a.order > b.order);

const mapStateToProps = (state) => ({
  months: state.months,
  categories: sort(filter(state.categories)),
  operations: state.operations
})

const IncomeBodyContainer = connect(
  mapStateToProps
)(IncomeBody);

export default IncomeBodyContainer;
