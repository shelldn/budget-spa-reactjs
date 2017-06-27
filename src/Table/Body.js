import React, { Component, Children, cloneElement } from 'react';

let bias = 0;

class Body extends Component {

  constructor(props) {
    super(props);
    this._bias = bias;
    bias += Children.count(props.children);
  }

  render() {

    return (
      <tbody>
        {Children.map(this.props.children, (c, idx) => cloneElement(c, { id: this._bias + idx }))}
      </tbody>
    );
  }
}

export default Body;
