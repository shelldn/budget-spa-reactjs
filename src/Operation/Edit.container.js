import Edit from './Edit';
import { changeOperation, commitOperation } from './Edit.reducer';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  value: state.operationEdit.value
})

const mapDispatchToProps = (dispatch, props) => ({
  onChange: (...args) => dispatch(changeOperation(...args)),
  onCommit: () => dispatch(commitOperation(props.id, props.onCommit))
});

const EditContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Edit);

export default EditContainer;
