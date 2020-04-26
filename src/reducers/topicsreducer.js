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
    // sets isLoading to true until the API call to fetch question finishes.
    case REQUEST_FEATURED_TOPICS:
      return { ...state, isLoading: true };
    // sets the featured topics in the state.
    case SUCCESS_FEATURED_TOPICS:
      return {
        ...state,
        isLoading: false,
        featuredTopics: action.payload,
        error: null,
      };
    // set error in the state in case of failure.
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
