import React, { Component } from "react";
import QuestionFeedTopbar from "./Questionfeedtopbar";
import QuestionCard from "./Questioncard";
import { connect } from "react-redux";
import { allQuestions, topicQuestions } from "../actions/questionactions";

class QuestionFeed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [],
    };
  }
  componentDidMount() {
    const { match } = this.props;
    const topic = match.params.topicId;
    if (topic !== undefined) {
      this.props.topicQuestions(topic);
    } else {
      this.props.allQuestions();
    }
  }

  componentDidUpdate(earlierProps) {
    if (earlierProps.match.params.topicId !== this.props.match.params.topicId) {
      if (this.props.match.params.topicId !== undefined) {
        this.props.topicQuestions(this.props.match.params.topicId);
      } else {
        this.props.allQuestions();
      }
    }
    if (earlierProps.questions !== this.props.questions) {
      this.setState({ questions: this.props.questions });
    }
  }

  render() {
    return (
      <>
        <QuestionFeedTopbar />
        {this.state.questions.map((data, index) => (
          <QuestionCard key={index} questionData={data} />
        ))}
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  questions: state.questions.questions,
});

export default connect(mapStateToProps, { allQuestions, topicQuestions })(
  QuestionFeed
);
