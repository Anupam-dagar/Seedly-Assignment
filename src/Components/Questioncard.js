import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import QuestionCardTopics from "./Questioncardtopics";
import QuestionFollowShareBar from "./Questionfollowsharebar";
import QuestionAnswerCard from "./Questionanswercard";
import { connect } from "react-redux";

// Question Card Component. (Displays a Question)
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
          <QuestionCardTopics topics={this.state.topics} />
          <Card.Title>{this.state.questionTitle}</Card.Title>
          <QuestionFollowShareBar
            followers={this.state.followers}
            answers={this.state.answers.length}
          />
          {this.props.filterParam !== "unanswered" ? (
            <>
              <QuestionAnswerCard answer={this.state.answers[0]} />
              <Button className="btn-like text-secondary pl-3 pr-3">
                <FontAwesomeIcon color="yellow" icon={["fas", "thumbs-up"]} />{" "}
                {this.state.answers[0].likeCount}
              </Button>
            </>
          ) : (
            <Button className="btn-answer mt-4">Answer Now</Button>
          )}
        </Card.Body>
      </Card>
    );
  }
}

const mapStateToProps = (state) => ({
  filterParam: state.filterParam.filterParam,
});

export default connect(mapStateToProps, null)(QuestionCard);
