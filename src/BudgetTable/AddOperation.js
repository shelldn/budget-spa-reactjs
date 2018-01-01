import React, { Component } from 'react';

class AddOperation extends Component {

  componentDidMount() {
    this.input.select();
  }

  handleSubmit(e) {
    e.preventDefault();
    const { id, categoryId, month, onSubmit } = this.props;
    onSubmit(id, categoryId, month, this.input.value);
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

export default AddOperation;
