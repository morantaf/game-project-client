import React, { Component } from "react";
import SignUpForm from "./SignUpForm";
import { connect } from "react-redux";
import { signUp } from "../actions/userActions";
import { Link, Redirect } from "react-router-dom";

class SignUpFormContainer extends Component {
  state = { username: "", email: "", password: "" };

  onSubmit = event => {
    event.preventDefault();
    console.log("clicked");
    this.props.signUp(this.state);

    this.setState({
      username: "",
      email: "",
      password: ""
    });
  };

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    if (this.props.user.createdUser) {
      return <Redirect to="/" />;
    } else {
      return (
        <SignUpForm
          onSubmit={this.onSubmit}
          onChange={this.onChange}
          values={this.state}
        />
      );
    }
  }
}

const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, { signUp })(SignUpFormContainer);
