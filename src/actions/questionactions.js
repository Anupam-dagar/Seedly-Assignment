import { REQUEST_ALL_QUESTIONS, REQUEST_TOPIC_QUESTION } from "./types";

// allQuestions action sets the filter parameters for fetching all questions.
export const allQuestions = (trending, unanswered, query, page) => {
  console.log("REQUEST_ALL_QUESTIONS action received");
  return {
    type: REQUEST_ALL_QUESTIONS,
    trending: trending,
    unanswered: unanswered,
    query: query,
    page: page,
  };
};

// topicQuestions action sets the filter parameters for fetching all questions for a given topic.
export const topicQuestions = (topic, trending, unanswered, query, page) => {
  console.log("REQUEST_TOPIC_QUESTION action received");
  return {
    type: REQUEST_TOPIC_QUESTION,
    topic: topic,
    trending: trending,
    unanswered: unanswered,
    query: query,
    page: page,
  };
};
