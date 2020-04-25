import {
  REQUEST_ALL_QUESTIONS,
  SUCCESS_ALL_QUESTIONS,
  FAILURE_ALL_QUESTIONS,
} from "../actions/types";

const initialState = {
  questions: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case REQUEST_ALL_QUESTIONS:
      return { ...state, isLoading: true };
    case SUCCESS_ALL_QUESTIONS:
      return {
        ...state,
        isLoading: false,
        questions: action.payload,
        error: null,
      };
    case FAILURE_ALL_QUESTIONS:
      return { ...state, isLoading: false, error: action.error };
    default:
      return state;
  }
}
