import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import request from "superagent";
import RoomForm from "./RoomForm";
import RoomFormContainer from "./RoomFormContainer";

const baseUrl = "http://localhost:4000";

const stream = new EventSource(`${baseUrl}/stream`);

class Homepage extends Component {
  componentDidMount() {
    stream.onmessage = event => {
      const parsed = JSON.parse(event.data);
      this.props.dispatch(parsed);
    };
  }

  createRoom = async name => {
    try {
      const response = await request.post(`${baseUrl}/rooms`).send({ name });

      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    const rooms = this.props.rooms.list.map(room => (
      <div>
        <Link to={`/rooms/${room.id}`}>{room.name ? room.name : room.id}</Link>
      </div>
    ));

    if (!this.props.user.auth) {
      return (
        <h1>
          <Link to="/">PLEASE LOGIN TO CONTINUE</Link>
        </h1>
      );
    }
    return (
      <div>
        <h1>Welcome:{this.props.user.loggedInUser}</h1>
        <h2>Create a room</h2>
        <RoomFormContainer />

        <h2>rooms</h2>
        {rooms}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
  rooms: state.rooms
});

export default connect(mapStateToProps)(Homepage);
