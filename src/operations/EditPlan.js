import React, { Component } from 'react';

class EditPlan extends Component {

  componentDidMount() {
    this.input.select();
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
      <td>
        <form onSubmit={this.handleSubmit}>
          <input
            ref={i => this.input = i}
            autoFocus
            type="text"
            defaultValue={this.props.plan.value}
          />
        </form>
      </td>
    );
  }
}

export default EditPlan;
