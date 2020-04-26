import React, { Component } from "react";
import { Card } from "react-bootstrap";
import AnswerTopBar from "./Answertopbar";
import Answer from "./Answer";

// Answer Card Component for the Question
class QuestionAnswerCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      answerContent: this.props.answer.content,
      user: this.props.answer.user,
      answerUpdated: this.props.answer.answerUpdated,
    };
  }

  componentDidUpdate(earlierProps) {
    earlierProps.answer !== this.props.answer &&
      this.setState({
        answerContent: this.props.answer.content,
        user: this.props.answer.user,
        answerUpdated: this.props.answer.answerUpdated,
      });
  }

  render() {
    return (
      <Card className="mt-4">
        <Card.Body>
          <AnswerTopBar
            user={this.state.user}
            time={this.state.answerUpdated}
          />
          <Answer content={this.state.answerContent} />
        </Card.Body>
      </Card>
    );
  }
}

export default QuestionAnswerCard;
