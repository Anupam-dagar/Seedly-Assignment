import React, { Component } from "react";
import QuestionFeedTopbar from "./Questionfeedtopbar";
import QuestionCard from "./Questioncard";

class QuestionFeed extends Component {
  render() {
    return (
      <>
        <QuestionFeedTopbar />
        <QuestionCard />
      </>
    );
  }
}

export default QuestionFeed;
