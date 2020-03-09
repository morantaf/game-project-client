import React, { Component } from "react";
import LoginFormContainer from "./Components/LoginFormContainer";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        HELLO! THIS IS HOMEPAGE
        <LoginFormContainer />
      </div>
    );
  }
}

export default App;
