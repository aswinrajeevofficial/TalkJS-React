import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";
import history from "./history";
import "./Home.css";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {name: '', id: '', email: ''};

    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangeId = this.handleChangeId.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChangeName(event) {
    this.setState({name: event.target.value});
  }

  handleChangeEmail(event) {
    this.setState({email: event.target.value});
  }

  handleChangeId(event) {
    this.setState({id: event.target.value});
  }

  handleSubmit(event) {
    localStorage.setItem("id", this.state.id);
    localStorage.setItem("name", this.state.name);
    localStorage.setItem("email", this.state.email);
    history.push("/viewLiveLecture");
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <Container fluid>
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand className="container-nav" href="">
              <div className = "image">
              <img
                  alt=""
                  src="https://www.logolynx.com/images/logolynx/a9/a98355315595fe5800b326aac90744f5.png"
                  width="40"
                  height="50"
                  className="d-inline-block align-top logo"
                />
              </div>
              <div className = "text">
              <h1 className="heading">John Doe University</h1>
              </div>                
              </Navbar.Brand>
            </Container>
          </Navbar>
          <Row>
            <Col></Col>
            <Col>
              <Form onSubmit={this.handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Enter ID</Form.Label>
                  <Form.Control type="number" placeholder="Enter ID" value={this.state.id} onChange={this.handleChangeId}/>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Enter Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter name" value={this.state.name} onChange={this.handleChangeName}/>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Enter Email Address</Form.Label>
                  <Form.Control
                    type="email" placeholder="Enter email address" value={this.state.email} onChange={this.handleChangeEmail}
                  />
                </Form.Group>

                <Button
                  type="submit"
                  className="submit"
                >
                  Enter Class
                </Button>
              </Form>
            </Col>
            <Col></Col>
          </Row>
          <Row>
            <footer className = "footer-div">
              
            </footer>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Home;
