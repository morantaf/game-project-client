import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Homepage extends Component {
  render() {
    console.log("user", this.props.user);
    if (!this.props.user.auth) {
      return (
        <h1>
          <Link to="/">PLEASE LOGIN TO CONTINUE</Link>
        </h1>
      );
    }
    return <div>You are Logged in</div>;
  }
}

const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
