import {
  REQUEST_FEATURED_TOPICS,
  SUCCESS_FEATURED_TOPICS,
  FAILURE_FEATURED_TOPICS,
} from "../actions/types";

const initialState = {
  featuredTopics: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case REQUEST_FEATURED_TOPICS:
      return { ...state, isLoading: true };
    case SUCCESS_FEATURED_TOPICS:
      return {
        ...state,
        isLoading: false,
        featuredTopics: action.payload,
        error: null,
      };
    case FAILURE_FEATURED_TOPICS:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    default:
      return state;
  }
}
