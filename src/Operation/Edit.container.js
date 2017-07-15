import Edit from './Edit';
import { changeOperation } from './Edit.reducer';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  value: state.operationEdit.value
})

const mapDispatchToProps = {
  onChange: changeOperation,
};

const EditContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Edit);

export default EditContainer;
