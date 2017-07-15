import Edit from './Edit';
import { change, commit } from './Edit.reducer';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  id: state.edit.id,
  type: state.edit.type,
  value: state.edit.value
})

const mapDispatchToProps = {
  onChange: change,
  onCommit: commit
};

const EditContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Edit);

export default EditContainer;
