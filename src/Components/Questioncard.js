import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import QuestionCardTopics from "./Questioncardtopics";
import QuestionFollowShareBar from "./Questionfollowsharebar";
import QuestionAnswerCard from "./Questionanswercard";

class QuestionCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      questionTitle: this.props.questionData.title,
      followers: this.props.questionData.followers,
      topics: this.props.questionData.topics,
      answers: this.props.questionData.answers,
    };
  }

  render() {
    return (
      <Card style={{ border: 0 }} className="mt-2">
        <Card.Body>
          <QuestionCardTopics topics={this.state.topics} />
          <Card.Title>{this.state.questionTitle}</Card.Title>
          <QuestionFollowShareBar
            followers={this.state.followers}
            answers={this.state.answers.length}
          />
          <QuestionAnswerCard answer={this.state.answers[0]} />
          <Button className="btn-like text-secondary pl-3 pr-3">
            <FontAwesomeIcon color="yellow" icon={["fas", "thumbs-up"]} />{" "}
            {this.state.answers[0].likeCount}
          </Button>
        </Card.Body>
      </Card>
    );
  }
}

export default QuestionCard;
