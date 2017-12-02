import React, { Component } from 'react';

class AddPlan extends Component {

  componentDidMount() {
    this.input.select();
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(this.input.value);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <input
          ref={i => this.input = i}
          autoFocus
          type="text"
          defaultValue={this.props.value}
        />
      </form>
    );
  }
}

export default AddPlan;
