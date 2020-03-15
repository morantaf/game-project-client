import React, { Component } from "react";
import LoginFormContainer from "./Components/LoginFormContainer";
import "./App.css";
import { Route } from "react-router";
import Homepage from "./Components/Homepage";
import SignUpFormContainer from "./Components/SignUpFormContainer";
import Room from "./Components/Room";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={LoginFormContainer} />
        <Route exact path="/homepage" component={Homepage} />
        <Route exact path="/signup" component={SignUpFormContainer} />
        <Route path="/rooms/:roomId" component={Room} />
      </div>
    );
  }
}

export default App;
