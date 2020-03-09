import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import CardsContainer from "./CardsContainer";

class Homepage extends Component {
  render() {
    console.log(this.props.user);
    if (!this.props.user.auth) {
      return (
        <h1>
          <Link to="/">PLEASE LOGIN TO CONTINUE</Link>
        </h1>
      );
    }
    return (
      <div>
        <h1>USERNAME:{this.props.user.loggedInUser}</h1>
        <CardsContainer />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
