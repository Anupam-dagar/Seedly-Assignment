import React, { Component } from "react";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  Container,
  Image,
  InputGroup,
} from "react-bootstrap";
import logo from "../assets/logo.png";
import searchSvg from "../assets/search.svg";

class NavigationBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputClass: "ig-size",
      navLinkVisible: "",
    };
  }

  handleSearch() {
    this.setState({
      inputClass: "ig-size-expanded",
      navLinkVisible: "invisible",
    });
  }

  handleFocusOut() {
    this.setState({ inputClass: "ig-size", navLinkVisible: "" });
  }

  render() {
    return (
      <Navbar collapseOnSelect expand="lg" sticky="top" className="bg-nav">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Brand href="#home" className="ml-4 mr-auto">
            <Image src={logo} width={80} className="d-inline-block align-top" />
          </Navbar.Brand>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className={`mr-auto ${this.state.navLinkVisible}`}>
              <Nav.Link
                href="#home"
                className="text-primary font-weight-bold nav-fontsize"
              >
                Ask Community
              </Nav.Link>
              <Nav.Link
                href="#link"
                className="font-weight-bold text-navbar nav-fontsize"
              >
                Products
              </Nav.Link>
              <Nav.Link
                href="#link"
                className="font-weight-bold text-navbar nav-fontsize"
              >
                Content
              </Nav.Link>
              <Nav.Link
                href="#link"
                className="font-weight-bold text-navbar nav-fontsize"
              >
                Events
              </Nav.Link>
            </Nav>
            <Navbar.Brand href="#home" className="ml-4"></Navbar.Brand>
          </Navbar.Collapse>
          <Form inline className="mr-4">
            <InputGroup size="sm" className={`mr-2 ${this.state.inputClass}`}>
              <InputGroup.Prepend>
                <InputGroup.Text className="bg-input" id="inputGroupPrepend">
                  <Image src={searchSvg} width={20} />
                </InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                onClick={() => this.handleSearch()}
                onBlur={() => this.handleFocusOut()}
                type="text"
                placeholder="Find product reviews, questions, or articles"
                className="mr-sm-2 bg-input shadow-none"
              />
            </InputGroup>
            <Button
              variant="outline-primary"
              className="button-search nav-fontsize font-weight-bold pl-4 pr-4"
            >
              Join
            </Button>
          </Form>
        </Container>
      </Navbar>
    );
  }
}

export default NavigationBar;
