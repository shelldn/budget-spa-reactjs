import OutgoBody from './OutgoBody';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  months: state.months,
  categories: state.categories.filter(c => c.type === 'outgo'),
  operations: state.operations
});

const OutgoBodyContainer = connect(
  mapStateToProps
)(OutgoBody);

export default OutgoBodyContainer;
