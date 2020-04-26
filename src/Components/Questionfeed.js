import React, { Component } from "react";
import QuestionFeedTopbar from "./Questionfeedtopbar";
import QuestionCard from "./Questioncard";
import { connect } from "react-redux";
import { allQuestions, topicQuestions } from "../actions/questionactions";
import { withRouter } from "react-router";

class QuestionFeed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [],
    };
  }
  componentDidMount() {
    const filterParam = this.props.filterParam;
    let trending;
    let unanswered;
    if (filterParam === "recent") {
      trending = false;
      unanswered = false;
    }
    if (filterParam === "trending") {
      trending = true;
      unanswered = false;
    }
    if (filterParam === "unanswered") {
      trending = false;
      unanswered = true;
    }
    const { match } = this.props;
    const topic = match.params.topicId;
    if (topic !== undefined) {
      this.props.topicQuestions(topic, trending, unanswered);
    } else {
      this.props.allQuestions(trending, unanswered);
    }
  }

  componentDidUpdate(earlierProps) {
    if (
      earlierProps.match.params.topicId !== this.props.match.params.topicId ||
      earlierProps.filterParam !== this.props.filterParam
    ) {
      const filterParam = this.props.filterParam;
      let trending;
      let unanswered;
      if (filterParam === "recent") {
        trending = false;
        unanswered = false;
      }
      if (filterParam === "trending") {
        trending = true;
        unanswered = false;
      }
      if (filterParam === "unanswered") {
        trending = false;
        unanswered = true;
      }
      if (this.props.match.params.topicId !== undefined) {
        this.props.topicQuestions(
          this.props.match.params.topicId,
          trending,
          unanswered
        );
      } else {
        this.props.allQuestions(trending, unanswered);
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
  filterParam: state.filterParam.filterParam,
});

export default connect(mapStateToProps, { allQuestions, topicQuestions })(
  withRouter(QuestionFeed)
);
