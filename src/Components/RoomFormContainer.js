import React, { Component } from "react";
import { connect } from "react-redux";
import RoomForm from "./RoomForm";
import { createRoom } from "../actions/roomActions";

class RoomFormContainer extends Component {
  state = {
    name: ""
  };

  onSubmit = event => {
    event.preventDefault();

    this.props.createRoom(this.state.name);
  };

  onChange = event => {
    this.setState({
      name: event.target.value
    });
  };

  reset = () => {
    this.setState({ name: "" });
  };

  render() {
    return (
      <div>
        <RoomForm
          onSubmit={this.onSubmit}
          onChange={this.onChange}
          value={this.state.name}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {
  createRoom
};

export default connect(mapStateToProps, mapDispatchToProps)(RoomFormContainer);
