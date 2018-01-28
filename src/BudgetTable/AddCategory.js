import React, { Component } from 'react';

class AddCategory extends Component {

  handleSubmit(e) {
    this.props.onSubmit(this.input.value);
    e.preventDefault();
  }

  render() {
    return (

      <form onSubmit={this.handleSubmit.bind(this)}>
        <input
          autoFocus
          ref={i => this.input = i}
        />
      </form>
    );
  }
}

export default AddCategory;
