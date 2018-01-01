import React, { Component } from 'react';

class EditPlan extends Component {

  componentDidMount() {
    this.input.select();
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onCommit(this.input.value);
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

export default EditPlan;
