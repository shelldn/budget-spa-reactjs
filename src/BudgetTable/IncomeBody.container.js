import Body from './Body';
import { connect } from 'react-redux';

const filter = (categories) => categories
  .filter(c => c.type === 'income');
  
const mapStateToProps = (state) => ({
  months: state.months,
  categories: filter(state.categories),
  operations: state.operations
})

const IncomeBody = connect(
  mapStateToProps
)(Body);

export default IncomeBody;
