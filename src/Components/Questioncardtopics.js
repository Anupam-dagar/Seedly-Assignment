import React, { Component } from "react";
import { Link } from "react-router-dom";

// Question Card Topics Component. (Displays all the topics of a Question)
export class QuestionCardTopics extends Component {
  constructor(props) {
    super(props);

    this.state = {
      topics: this.props.topics,
    };
  }

  componentDidUpdate(earlierProps) {
    earlierProps.topics !== this.props.topics &&
      this.setState({ topics: this.props.topics });
  }

  render() {
    return (
      <div>
        {this.state.topics.map((data, index) => (
          <Link
            to={`/topics/${data.name}`}
            key={index}
            className="btn btn-primary qf-label pt-1 pb-1 mr-1 mb-3"
          >
            {data.name}
          </Link>
        ))}
      </div>
    );
  }
}

export default QuestionCardTopics;
