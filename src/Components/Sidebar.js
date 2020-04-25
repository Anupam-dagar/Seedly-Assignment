import React, { Component } from "react";
import { Nav, Card } from "react-bootstrap";
import { connect } from "react-redux";
import { featuredTopics } from "../actions/topicactions";

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeKey: "/",
      featuredTopics: [],
    };
  }

  componentDidMount() {
    this.props.featuredTopics();
  }

  componentDidUpdate(earlierProps) {
    if (earlierProps.topics !== this.props.topics) {
      this.setState({ featuredTopics: this.props.topics });
    }
  }

  handleClick(route, e) {
    this.setState({ activeKey: route });
  }

  render() {
    return (
      <Nav
        className="flex-column d-none d-lg-block"
        activeKey={this.state.activeKey}
        onSelect={(route, e) => this.handleClick(route, e)}
      >
        <Card style={{ border: 0, width: "13rem" }}>
          <Card.Body className="pt-2 pb-2 pl-2 pr-2">
            <Nav.Link className="text-sidebar pl-1 pr-1" href="/">
              All Questions
            </Nav.Link>
          </Card.Body>
        </Card>
        <Card style={{ border: 0, width: "13rem" }} className="mt-2">
          <Card.Body className="pt-2 pb-2 pl-2 pr-2">
            <Card.Title className="pl-1 pr-1">Featured Topics</Card.Title>
            {this.state.featuredTopics.map((data, index) => (
              <Nav.Link
                className="text-sidebar pl-1 pr-1"
                key={index}
                href={data.name}
              >
                {data.name}
              </Nav.Link>
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

export default connect(mapStateToProps, { featuredTopics })(Sidebar);
