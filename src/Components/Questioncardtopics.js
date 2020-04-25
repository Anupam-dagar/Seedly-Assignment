import React, { Component } from "react";
import { Button } from "react-bootstrap";

class QuestionCardTopics extends Component {
  constructor(props) {
    super(props);

    this.state = {
      topics: this.props.topics,
    };
  }

  render() {
    return (
      <div>
        {this.state.topics.map((data, index) => (
          <Button key={index} className="qf-label pt-1 pb-1 mr-1 mb-3">
            {data.name}
          </Button>
        ))}
      </div>
    );
  }
}

export default QuestionCardTopics;
