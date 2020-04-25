import { REQUEST_ALL_QUESTIONS } from "./types";

export const allQuestions = () => {
  console.log("REQUEST_ALL_QUESTIONS action received");
  return {
    type: REQUEST_ALL_QUESTIONS,
  };
};
