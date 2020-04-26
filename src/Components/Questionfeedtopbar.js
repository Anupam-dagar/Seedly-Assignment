import React, { Component } from "react";
import { Card, Nav } from "react-bootstrap";
import { connect } from "react-redux";
import { filterParams } from "../actions/filteractions";

// Question Feed Topbar Component. (Provides filters for the question feed.)
class QuestionFeedTopbar extends Component {
  handleClick(route, e) {
    e.preventDefault();

    switch (route) {
      case "/recent":
        this.props.filterParams("recent");
        break;
      case "/unanswered":
        this.props.filterParams("unanswered");
        break;
      case "/trending":
        this.props.filterParams("trending");
        break;
      default:
        return;
    }
  }

  render() {
    return (
      <Card style={{ border: 0 }}>
        <Card.Body className="pt-1 pb-1">
          <Nav
            activeKey={`/${this.props.filterParam}`}
            onSelect={(route, e) => this.handleClick(route, e)}
          >
            <Nav.Item>
              <Nav.Link eventKey="/recent" className={`qf-topbar`}>
                Recent Activity
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="/unanswered" className={`qf-topbar`}>
                Unanswered
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="/trending" className={`qf-topbar`}>
                Trending
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Card.Body>
      </Card>
    );
  }
}

const mapStateToProps = (state) => ({
  filterParam: state.filterParam.filterParam,
});

export default connect(mapStateToProps, { filterParams })(QuestionFeedTopbar);
