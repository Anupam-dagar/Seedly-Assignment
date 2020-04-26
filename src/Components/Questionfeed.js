import React, { Component } from "react";
import QuestionFeedTopbar from "./Questionfeedtopbar";
import QuestionCard from "./Questioncard";
import { connect } from "react-redux";
import { allQuestions, topicQuestions } from "../actions/questionactions";
import { withRouter } from "react-router";
import { Nav } from "react-bootstrap";

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
      this.props.topicQuestions(topic, trending, unanswered, null, 1);
    } else {
      this.props.allQuestions(trending, unanswered, null, 1);
    }
  }

  componentDidUpdate(earlierProps) {
    if (
      earlierProps.match.params.topicId !== this.props.match.params.topicId ||
      earlierProps.filterParam !== this.props.filterParam
    ) {
      this.setState({ questions: [] });
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
          unanswered,
          null,
          1
        );
      } else {
        this.props.allQuestions(trending, unanswered, null, 1);
      }
    }
    if (earlierProps.questions !== this.props.questions) {
      this.setState({
        questions: [...this.state.questions, ...this.props.questions],
      });
    }
  }

  loadQuestions() {
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
      this.props.topicQuestions(
        topic,
        trending,
        unanswered,
        null,
        this.props.page + 1
      );
    } else {
      this.props.allQuestions(trending, unanswered, null, this.props.page + 1);
    }
  }

  render() {
    return (
      <>
        <QuestionFeedTopbar />
        {this.state.questions.map((data, index) => (
          <QuestionCard key={index} questionData={data} />
        ))}
        {this.props.questions.length !== 0 && (
          <Nav.Link
            className="mt-3 text-load text-center"
            onClick={() => this.loadQuestions()}
          >
            Load More Questions
          </Nav.Link>
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  questions: state.questions.questions,
  filterParam: state.filterParam.filterParam,
  page: state.questions.page,
});

export default connect(mapStateToProps, { allQuestions, topicQuestions })(
  withRouter(QuestionFeed)
);
