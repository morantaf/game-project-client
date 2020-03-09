import React, { Component } from "react";

export default class SignUpForm extends Component {
  render() {
    console.log(this.props.onSubmit);
    return (
      <div>
        <form onSubmit={this.props.onSubmit}>
          <h3>Email</h3>
          <input
            type="text"
            name="email"
            placeholder="email"
            onChange={this.props.onChange}
            values={this.props.values}
          />
          <h3>Password</h3>
          <input
            type="password"
            name="password"
            placeholder="password"
            onChange={this.props.onChange}
            values={this.props.values}
          />
          <h3>UserName</h3>
          <input
            type="text"
            name="username"
            placeholder="username"
            onChange={this.props.onChange}
            values={this.props.values}
          />
          <button onSubmit={this.props.onSubmit}>SignUp</button>
        </form>
      </div>
    );
  }
}
