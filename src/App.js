import React, { Component } from "react";
import LoginFormContainer from "./Components/LoginFormContainer";
import "./App.css";
import { Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        HELLO! THIS IS HOMEPAGE
        <Route exact path="/" component={LoginFormContainer} />
      </div>
    );
  }
}

export default App;
