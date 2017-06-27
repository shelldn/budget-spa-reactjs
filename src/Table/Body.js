import React, { Component, Children, cloneElement } from 'react';
import { connect } from 'react-redux';

let idx = 1;

class Body extends Component {

  constructor(props) {
    super(props);
    props.register(Children.count(props.children));
    props.id = idx++;
  }

  render() {
    const { rowBias, children } = this.props;
    return (
      <tbody>
        {Children.map(children, (c, idx) => cloneElement(c, { id: rowBias + idx }))}
      </tbody>
    );
  }
}

const mapStateToProps = (state, props) => ({
  rowBias: state.table.bodies.find(b => b.id === props.id).bias
});

const mapDispatchToProps = (dispatch) => ({
  register: childrenCount => dispatch({
    type: 'budget-io/table/body/REGISTER',
    payload: {
      childrenCount
    }
  })
});

Body = connect(
  mapStateToProps,
  mapDispatchToProps
)(Body);

export default Body;
