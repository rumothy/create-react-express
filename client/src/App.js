import React, { Component } from "react";
import Jumbotron from "./components/Jumbotron";
import Nav from "./components/Nav";

class App extends Component {
  state = {};

  render() {
    return (
      <div>
        <Nav />
        <Jumbotron />
      </div>
    );
  }
}

export default App;
