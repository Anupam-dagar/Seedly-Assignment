import React, { Component } from "react";
import { Card, Nav } from "react-bootstrap";

class QuestionFeedTopbar extends Component {
  render() {
    return (
      <Card style={{ border: 0 }}>
        <Card.Body className="pt-1 pb-1">
          <Nav>
            <Nav.Item>
              <Nav.Link className="qf-topbar active">Recent Activity</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className="qf-topbar">Unanswered</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className="qf-topbar">Trending</Nav.Link>
            </Nav.Item>
          </Nav>
        </Card.Body>
      </Card>
    );
  }
}

export default QuestionFeedTopbar;
