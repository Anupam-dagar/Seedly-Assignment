import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class QuestionFollowShareBar extends Component {
  render() {
    return (
      <div className="d-flex justify-content-between">
        <div>
          <Button className="btn-follow">
            <FontAwesomeIcon icon={["fas", "plus"]} className="mr-1" />
            Follow . 5
          </Button>
        </div>
        <div>
          <span className="text-secondary font-weight-bold mr-3">
            4 answers
          </span>{" "}
          <FontAwesomeIcon icon={["fas", "share-alt"]} size="lg" />
        </div>
      </div>
    );
  }
}

export default QuestionFollowShareBar;
