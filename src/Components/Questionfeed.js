import React, { Component } from "react";
import QuestionFeedTopbar from "./Questionfeedtopbar";
import QuestionCard from "./Questioncard";
import { connect } from "react-redux";
import { allQuestions } from "../actions/questionactions";

class QuestionFeed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [],
    };
  }
  componentDidMount() {
    this.props.allQuestions();
  }

  componentDidUpdate(earlierProps) {
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

export default connect(mapStateToProps, { allQuestions })(QuestionFeed);
