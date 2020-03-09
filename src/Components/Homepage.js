import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import CardsContainer from "./CardsContainer";

class Homepage extends Component {
  render() {
    if (!this.props.user.auth) {
      return (
        <h1>
          <Link to="/">PLEASE LOGIN TO CONTINUE</Link>
        </h1>
      );
    }
    return (
      <div>
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
