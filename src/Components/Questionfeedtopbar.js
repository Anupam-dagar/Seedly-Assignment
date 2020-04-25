import React, { Component } from "react";
import { Card, Nav } from "react-bootstrap";

class QuestionFeedTopbar extends Component {
  handleClick(route, e) {
    e.preventDefault();
    if (route === "/recent") {
      //dispatch all ques
    }
    if (route === "/unanswered") {
      //dispatch unasnwered ques
    }
    if (route === "/trending") {
      //dispatch trending ques
    }
  }

  render() {
    return (
      <Card style={{ border: 0 }}>
        <Card.Body className="pt-1 pb-1">
          <Nav
            defaultActiveKey="/recent"
            onSelect={(route, e) => this.handleClick(route, e)}
          >
            <Nav.Item>
              <Nav.Link eventKey="/recent" className="qf-topbar">
                Recent Activity
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="/unanswered" className="qf-topbar">
                Unanswered
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="/trending" className="qf-topbar">
                Trending
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Card.Body>
      </Card>
    );
  }
}

export default QuestionFeedTopbar;
