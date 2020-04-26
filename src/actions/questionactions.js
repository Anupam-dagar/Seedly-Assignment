import { REQUEST_ALL_QUESTIONS, REQUEST_TOPIC_QUESTION } from "./types";

export const allQuestions = (trending, unanswered) => {
  console.log("REQUEST_ALL_QUESTIONS action received");
  return {
    type: REQUEST_ALL_QUESTIONS,
    trending: trending,
    unanswered: unanswered,
  };
};

export const topicQuestions = (topic, trending, unanswered) => {
  console.log("REQUEST_TOPIC_QUESTION actin received");
  return {
    type: REQUEST_TOPIC_QUESTION,
    topic: topic,
    trending: trending,
    unanswered: unanswered,
  };
};
