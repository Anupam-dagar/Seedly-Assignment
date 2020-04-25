import React, { Component } from "react";
import { Button } from "react-bootstrap";

class QuestionCardTopics extends Component {
  render() {
    return (
      <div>
        <Button className="qf-label pt-1 pb-1 mr-1 mb-3">
          Singlife Account
        </Button>
        <Button className="qf-label pt-1 pb-1 mr-1 mb-3">
          Savings Account
        </Button>
      </div>
    );
  }
}

export default QuestionCardTopics;
