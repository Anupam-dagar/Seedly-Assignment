import { REQUEST_ALL_QUESTIONS, REQUEST_TOPIC_QUESTION } from "./types";

// allQuestions action sets the filter parameters for fetching all questions.
export const allQuestions = (trending, unanswered, page) => {
  return {
    type: REQUEST_ALL_QUESTIONS,
    trending: trending,
    unanswered: unanswered,
    page: page,
  };
};

// topicQuestions action sets the filter parameters for fetching all questions for a given topic.
export const topicQuestions = (topic, trending, unanswered, page) => {
  return {
    type: REQUEST_TOPIC_QUESTION,
    topic: topic,
    trending: trending,
    unanswered: unanswered,
    page: page,
  };
};
