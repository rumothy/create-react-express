import React, { Component } from "react";
import Jumbotron from "./components/Jumbotron";
import Nav from "./components/Nav";
import Input from "./components/Input";
import Button from "./components/Button";
import { Container, Row, Col } from "./components/Grid";

class App extends Component {
  state = {};

  render() {
    return (
      <div>
        <Nav />
        <Jumbotron />
        <Container>
          <Row>
            <Col>
              <form>
                <Container>
                  <Row>
                    <Col>
                      <Input />
                    </Col>
                    <Col>
                      <Button>Search</Button>
                    </Col>
                  </Row>
                </Container>
              </form>
            </Col>
          </Row>
          <Row>
            <Col>
              <h1>Render Recipes Here</h1>
            </Col>
          </Row>
        </Container>
        <Input />
      </div>
    );
  }
}

export default App;
