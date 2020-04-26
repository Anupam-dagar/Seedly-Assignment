import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";
import QuestionCardTopics from "./Questioncardtopics";
import QuestionFollowShareBar from "./Questionfollowsharebar";

class UnansweredQuestionCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      questionTitle: this.props.questionData.title,
      followers: this.props.questionData.followers,
      topics: this.props.questionData.topics,
      answers: this.props.questionData.answers,
    };
  }

  componentDidUpdate(earlierProps) {
    if (earlierProps.questionData !== this.props.questionData) {
      this.setState({
        questionTitle: this.props.questionData.title,
        followers: this.props.questionData.followers,
        topics: this.props.questionData.topics,
        answers: this.props.questionData.answers,
      });
    }
  }

  render() {
    return (
      <Card style={{ border: 0 }} className="mt-2">
        <Card.Body>
          <QuestionCardTopics />
          <Card.Title>How do I know whether I qualify?</Card.Title>
          <QuestionFollowShareBar />
          <Button className="btn-answer mt-4">Answer Now</Button>
        </Card.Body>
      </Card>
    );
  }
}

export default UnansweredQuestionCard;
