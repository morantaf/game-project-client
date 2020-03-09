import React, { Component } from "react";
import LoginFormContainer from "./Components/LoginFormContainer";
import "./App.css";
import { Route } from "react-router";
import Homepage from "./Components/Homepage";
import SignUpFormContainer from "./Components/SignUpFormContainer";
class App extends Component {
  render() {
    return (
      <div className="App">
        HELLO! THIS IS HOMEPAGE
        <Route exact path="/" component={LoginFormContainer} />
        <Route exact path="/homepage" component={Homepage} />
        <Route exact path="/signup" component={SignUpFormContainer} />
      </div>
    );
  }
}

export default App;
