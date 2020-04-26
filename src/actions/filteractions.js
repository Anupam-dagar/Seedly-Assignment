import { REQUEST_CHANGE_FILTER_PARAM } from "./types";

// filterParams action sets the current filter type to show Recent Activity, unanswered or trending questions.
export const filterParams = (filterType) => {
  return {
    type: REQUEST_CHANGE_FILTER_PARAM,
    filterParam: filterType,
  };
};
