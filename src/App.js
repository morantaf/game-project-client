import React, { Component } from "react";
import LoginFormContainer from "./Components/LoginFormContainer";
import "./App.css";
import { Route } from "react-router";
import { Homepage } from "./Components/Homepage";

class App extends Component {
  render() {
    return (
      <div className="App">
        HELLO! THIS IS HOMEPAGE
        <Route exact path="/" component={LoginFormContainer} />
        <Route exact path="/homepage" component={Homepage} />
      </div>
    );
  }
}

export default App;
