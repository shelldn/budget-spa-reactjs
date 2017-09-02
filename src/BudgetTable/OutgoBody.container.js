import Body from './Body';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  months: state.months,
  categories: state.categories.filter(c => c.type === 'outgo'),
  operations: state.operations
});

const OutgoBody = connect(
  mapStateToProps
)(Body);

export default OutgoBody;
