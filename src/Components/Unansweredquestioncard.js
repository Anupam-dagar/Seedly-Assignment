import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";
import QuestionCardTopics from "./Questioncardtopics";
import QuestionFollowShareBar from "./Questionfollowsharebar";

class UnansweredQuestionCard extends Component {
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
