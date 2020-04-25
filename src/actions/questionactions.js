import { REQUEST_ALL_QUESTIONS, REQUEST_TOPIC_QUESTION } from "./types";

export const allQuestions = () => {
  console.log("REQUEST_ALL_QUESTIONS action received");
  return {
    type: REQUEST_ALL_QUESTIONS,
  };
};

export const topicQuestions = (topic) => {
  console.log("REQUEST_TOPIC_QUESTION actin received");
  return {
    type: REQUEST_TOPIC_QUESTION,
    topic: topic,
  };
};
