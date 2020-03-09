import React, { Component } from "react";
import { connect } from "react-redux";
import LoginForm from "./LoginForm";

class LoginFormContainer extends Component {
  state = {
    email: "",
    password: ""
  };

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  onSubmit = event => {
    event.preventDefault();
    this.props.createImage(this.state);
    this.setState({
      email: "",
      password: ""
    });
  };

  render() {
    return (
      <LoginForm
        onSubmit={this.onSubmit}
        onChange={this.onChange}
        values={this.state}
      />
    );
  }
}

export default connect(null)(LoginFormContainer);
