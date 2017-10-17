import React, { Component } from 'react';

class EditCategory extends Component {

  componentDidMount() {
    this.input.select();
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.props.id, this.input.value);
  }

  render() {
    return (

      <form onSubmit={this.handleSubmit}>
        <input
          ref={i => this.input = i}
          autoFocus
          defaultValue={this.props.name}
        />
      </form>
    );
  }
}

export default EditCategory;
