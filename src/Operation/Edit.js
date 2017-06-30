import React from 'react';
import { change } from './Edit.reducer';
import { connect } from 'react-redux';

let Edit = ({
  id,
  value,
  change
}) => (
  <form>
    <input
      autoFocus
      value={value}
      onChange={e => change(e.target.value)}
    />
  </form>
)

const mapStateToProps = (state) => ({
  value: state.edit.value
})

const mapDispatchToProps = {
  change
};

Edit = connect(
  mapStateToProps,
  mapDispatchToProps
)(Edit);

export default Edit;
