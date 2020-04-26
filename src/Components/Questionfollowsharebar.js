import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Question Follow Share Bar Component.
class QuestionFollowShareBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      followers: this.props.followers,
      answers: this.props.answers,
    };
  }

  componentDidUpdate(earlierProps) {
    earlierProps.followers !== this.props.followers &&
      this.setState({ followers: this.props.followers });

    earlierProps.answers !== this.props.answers &&
      this.setState({ answers: this.props.answers });
  }

  render() {
    return (
      <div className="d-flex justify-content-between">
        <div>
          <Button className="btn-follow">
            <FontAwesomeIcon icon={["fas", "plus"]} className="mr-1" />
            Follow . {this.state.followers}
          </Button>
        </div>
        <div>
          <span className="text-secondary font-weight-bold mr-3">
            {this.state.answers} answers
          </span>{" "}
          <FontAwesomeIcon icon={["fas", "share-alt"]} size="lg" />
        </div>
      </div>
    );
  }
}

export default QuestionFollowShareBar;
