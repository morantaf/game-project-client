import React, { Component } from "react";

export default class RoomForm extends Component {
  render() {
    return (
      <form onSubmit={this.props.onSubmit}>
        <input
          type="text"
          onChange={this.props.onChange}
          value={this.props.value}
        />
        <button>Create</button>

        <button onClick={this.props.reset}>Reset</button>
      </form>
    );
  }
}
