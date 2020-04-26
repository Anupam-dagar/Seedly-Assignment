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
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { allQuestions, topicQuestions } from "../actions/questionactions";
import _ from "lodash";

// Navigation Bar Component
class NavigationBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputClass: "ig-size",
      navLinkVisible: "",
      searchValue: "",
    };

    this.delayedRequest = _.debounce(this.delayedRequest, 500);
  }

  // Expand search input on click.
  handleSearch() {
    this.setState({
      inputClass: "ig-size-expanded",
      navLinkVisible: "invisible",
      searchValue: "",
    });
  }

  // Return search input to original width on losing focus.
  handleFocusOut() {
    this.setState({
      inputClass: "ig-size",
      navLinkVisible: "",
      searchValue: "",
    });
  }

  handleInputChange(e) {
    this.setState({ searchValue: e.target.value });
    this.delayedRequest(e.target.value);
  }

  delayedRequest(searchValue) {
    const filterParam = this.props.filterParam;
    let trending;
    let unanswered;
    if (filterParam === "recent") {
      trending = false;
      unanswered = false;
    }
    if (filterParam === "trending") {
      trending = true;
      unanswered = false;
    }
    if (filterParam === "unanswered") {
      trending = false;
      unanswered = true;
    }
    const { match } = this.props;
    if ('topicId' in match.params) {
      this.props.topicQuestions(match.params.topicId, trending, unanswered, searchValue, 1);
    } else {
      this.props.allQuestions(trending, unanswered, searchValue, 1);
    }
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
                onChange={(e) => this.handleInputChange(e)}
                type="text"
                placeholder="Find product reviews, questions, or articles"
                className="mr-sm-2 bg-input shadow-none"
                value={this.state.value}
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

const mapStateToProps = (state) => ({
  filterParam: state.filterParam.filterParam,
});

export default connect(mapStateToProps, { allQuestions, topicQuestions })(
  withRouter(NavigationBar)
);
