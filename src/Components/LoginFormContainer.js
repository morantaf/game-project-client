import React, { Component } from "react";
import { connect } from "react-redux";
import LoginForm from "./LoginForm";
import { login } from "../actions/userActions";
import { Link, Redirect } from "react-router-dom";

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
    this.props.login(this.state);
    this.setState({
      email: "",
      password: ""
    });
  };

  render() {
    if (this.props.user.auth) {
      return <Redirect to="/homepage" />;
    }

    return (
      <LoginForm
        onSubmit={this.onSubmit}
        onChange={this.onChange}
        values={this.state}
      />
    );
  }
}

const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = {
  login
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginFormContainer);
