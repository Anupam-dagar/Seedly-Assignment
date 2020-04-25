import React, { Component } from "react";
import QuestionFeedTopbar from "./Questionfeedtopbar";
import QuestionCard from "./Questioncard";
import UnansweredQuestionCard from "./Unansweredquestioncard";

class QuestionFeed extends Component {
  render() {
    return (
      <>
        <QuestionFeedTopbar />
        <QuestionCard />
        <UnansweredQuestionCard />
      </>
    );
  }
}

export default QuestionFeed;
