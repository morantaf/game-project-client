import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class LoginForm extends Component {
  render() {
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.props.onSubmit} />
        <h3>EMAIL</h3>
        <input
          type="text"
          name="email"
          placeholder="email"
          onChange={this.props.onChange}
          values={this.props.values}
        />
        <h3>PASSWORD</h3>
        <input
          type="password"
          name="password"
          placeholder="password"
          onChange={this.props.onChange}
          values={this.props.values}
        />
        <form />
        <button onClick={this.props.onSubmit}>Submit</button>
        <h3>
          <Link to="/signup">
            If you don't have an account with us click here to signup
          </Link>{" "}
        </h3>
      </div>
    );
  }
}
