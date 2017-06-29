import React, { Component, Children, cloneElement } from 'react';
import { resetIdx } from './Cell';

let idx = 0;

class Row extends Component {

  constructor(props) {
    super(props);
    this._row = idx++;
  }

  render() {
    const { children } = this.props;
    resetIdx();
    return (
      <tr>
        {Children.map(children, c => cloneElement(c, { row: this._row }))}
      </tr>
    );
  }
}

export default Row;
