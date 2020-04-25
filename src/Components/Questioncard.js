import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import QuestionCardTopics from "./Questioncardtopics";
import QuestionFollowShareBar from "./Questionfollowsharebar";
import QuestionAnswerCard from "./Questionanswercard";

class QuestionCard extends Component {
  render() {
    return (
      <Card style={{ border: 0 }} className="mt-2">
        <Card.Body>
          <QuestionCardTopics />
          <Card.Title>How do I know whether I qualify?</Card.Title>
          <QuestionFollowShareBar />
          <QuestionAnswerCard />
          <Button className="btn-like text-secondary pl-3 pr-3">
            <FontAwesomeIcon color="yellow" icon={["fas", "thumbs-up"]} /> 2
          </Button>
        </Card.Body>
      </Card>
    );
  }
}

export default QuestionCard;
