import React, { Component } from 'react';

class AddPlan extends Component {

  componentDidMount() {
    this.input.select();
  }

  render() {
    return (
      <form onSubmit={() => console.log(this.input.value)}>
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
