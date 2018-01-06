import React, { Component } from 'react';

class EditFact extends Component {

  componentDidMount() {
    this.input.select();
  }

  handleSubmit(e) {
    e.preventDefault();
    const amount = parseFloat(this.input.value);
    this.props.onCommit(amount);
  }

  render() {
    return (
      <td>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input
            ref={i => this.input = i}
            autoFocus
            type="text"
            defaultValue={this.props.value}
          />
        </form>
      </td>
    );
  }
}

export default EditFact;
