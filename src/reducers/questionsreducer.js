import {
  REQUEST_ALL_QUESTIONS,
  SUCCESS_ALL_QUESTIONS,
  FAILURE_ALL_QUESTIONS,
  REQUEST_TOPIC_QUESTION,
  SUCCESS_TOPIC_QUESTION,
  FAILURE_TOPIC_QUESTION,
} from "../actions/types";

const initialState = {
  questions: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    // sets isLoading to true until the API call to fetch question finishes.
    case REQUEST_ALL_QUESTIONS:
      return { ...state, isLoading: true };
    // sets the questions in the state along with current page of request.
    case SUCCESS_ALL_QUESTIONS:
      return {
        ...state,
        isLoading: false,
        questions: action.payload,
        page: action.page,
        error: null,
      };
    // set error in the state in case of failure.
    case FAILURE_ALL_QUESTIONS:
      return { ...state, isLoading: false, error: action.error };
    // sets isLoading to true until the API call to fetch question finishes.
    case REQUEST_TOPIC_QUESTION:
      return { ...state, isLoading: true };
    // sets the questions in the state along with current page of request.
    case SUCCESS_TOPIC_QUESTION:
      return {
        ...state,
        isLoading: false,
        questions: action.payload,
        page: action.page,
        error: null,
      };
    // set error in the state in case of failure.
    case FAILURE_TOPIC_QUESTION:
      return { ...state, isLoading: false, error: action.error };
    default:
      return state;
  }
}
