import React, { Component } from "react";
import QuestionFeedTopbar from "./Questionfeedtopbar";
import QuestionCard from "./Questioncard";
import { connect } from "react-redux";
import { allQuestions, topicQuestions } from "../actions/questionactions";
import { withRouter } from "react-router";
import { Nav } from "react-bootstrap";
import { filterParams } from "../actions/filteractions";

// Question Feed Component. (Displays all the questions.)
export class QuestionFeed extends Component {
  constructor(props) {
    super(props);

    this.state = {
      questions: [],
    };
  }

  componentDidMount() {
    const { match } = this.props;
    const filterParam = this.props.filterParam;
    let trending;
    let unanswered;

    switch (filterParam) {
      case "recent":
        trending = false;
        unanswered = false;
        break;
      case "trending":
        trending = true;
        unanswered = false;
        break;
      case "unanswered":
        trending = false;
        unanswered = true;
        break;
      default:
        return;
    }

    "topicId" in match.params
      ? this.props.topicQuestions(
          match.params.topicId,
          trending,
          unanswered,
          null,
          1
        )
      : this.props.allQuestions(trending, unanswered, null, 1);
  }

  componentDidUpdate(earlierProps) {
    if (
      earlierProps.match.params.topicId !== this.props.match.params.topicId ||
      earlierProps.filterParam !== this.props.filterParam
    ) {
      earlierProps.match.params.topicId !== this.props.match.params.topicId &&
        this.props.filterParams("recent");
      this.setState({ questions: [] });

      const filterParam = this.props.filterParam;
      let trending;
      let unanswered;

      switch (filterParam) {
        case "recent":
          trending = false;
          unanswered = false;
          break;
        case "trending":
          trending = true;
          unanswered = false;
          break;
        case "unanswered":
          trending = false;
          unanswered = true;
          break;
        default:
          return;
      }

      "topicId" in this.props.match.params
        ? this.props.topicQuestions(
            this.props.match.params.topicId,
            trending,
            unanswered,
            null,
            1
          )
        : this.props.allQuestions(trending, unanswered, null, 1);
    }

    earlierProps.questions !== this.props.questions &&
      this.setState({
        questions: [...this.state.questions, ...this.props.questions],
      });
  }

  loadQuestions() {
    const { match } = this.props;
    const filterParam = this.props.filterParam;
    let trending;
    let unanswered;

    switch (filterParam) {
      case "recent":
        trending = false;
        unanswered = false;
        break;
      case "trending":
        trending = true;
        unanswered = false;
        break;
      case "unanswered":
        trending = false;
        unanswered = true;
        break;
      default:
        return;
    }

    "topicId" in match.params
      ? this.props.topicQuestions(
          match.params.topicId,
          trending,
          unanswered,
          null,
          this.props.page + 1
        )
      : this.props.allQuestions(
          trending,
          unanswered,
          null,
          this.props.page + 1
        );
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

export default connect(mapStateToProps, {
  allQuestions,
  topicQuestions,
  filterParams,
})(withRouter(QuestionFeed));
