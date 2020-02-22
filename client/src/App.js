import React, { Component } from "react";
import Jumbotron from "./components/Jumbotron";
import Nav from "./components/Nav";
import Input from "./components/Input";

class App extends Component {
  state = {};

  render() {
    return (
      <div>
        <Nav />
        <Jumbotron />
        <Input />
      </div>
    );
  }
}

export default App;
