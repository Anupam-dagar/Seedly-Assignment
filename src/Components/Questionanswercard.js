import React, { Component } from "react";
import { Card } from "react-bootstrap";
import AnswerTopBar from "./Answertopbar";
import Answer from "./Answer";

class QuestionAnswerCard extends Component {
  render() {
    return (
      <Card className="mt-4">
        <Card.Body>
          <AnswerTopBar />
          <Answer />
        </Card.Body>
      </Card>
    );
  }
}

export default QuestionAnswerCard;
