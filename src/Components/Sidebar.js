import React, { Component } from "react";
import { Nav, Card } from "react-bootstrap";
import { connect } from "react-redux";
import { featuredTopics } from "../actions/topicactions";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import { matchPath } from "react-router";

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeKey: "",
      featuredTopics: [],
    };
  }

  componentDidMount() {
    this.props.featuredTopics();
    const path = matchPath(window.location.pathname, {
      path: "/topics/:topicId",
      exact: false,
      strict: false,
    });
    let route = "/";
    if (path !== null) {
      route = decodeURIComponent(path.params.topicId);
    }
    this.setState({ activeKey: route });
  }

  componentDidUpdate(earlierProps) {
    if (earlierProps.topics !== this.props.topics) {
      this.setState({ featuredTopics: this.props.topics });
    }
  }

  handleClick(route) {
    this.setState({ activeKey: route });
  }

  render() {
    return (
      <Nav className="flex-column d-none d-lg-block">
        <Card style={{ border: 0, width: "13rem" }}>
          <Card.Body className="pt-2 pb-2 pl-2 pr-2">
            <Link
              className={`text-sidebar nav-link pl-1 pr-1 ${
                this.state.activeKey === "/" ? "active" : ""
              }`}
              to="/"
              onClick={() => this.handleClick("/")}
            >
              All Questions
            </Link>
          </Card.Body>
        </Card>
        <Card style={{ border: 0, width: "13rem" }} className="mt-2">
          <Card.Body className="pt-2 pb-2 pl-2 pr-2">
            <Card.Title className="pl-1 pr-1">Featured Topics</Card.Title>
            {this.state.featuredTopics.map((data, index) => (
              <Link
                className={`text-sidebar nav-link pl-1 pr-1 ${
                  this.state.activeKey === data.name ? "active" : ""
                }`}
                key={index}
                to={`/topics/${data.name}`}
                onClick={() => this.handleClick(data.name)}
              >
                {data.name}
              </Link>
            ))}
          </Card.Body>
        </Card>
      </Nav>
    );
  }
}
const mapStateToProps = (state) => ({
  topics: state.topics.featuredTopics,
});

export default connect(mapStateToProps, { featuredTopics })(
  withRouter(Sidebar)
);
