import {
  REQUEST_CHANGE_FILTER_PARAM,
  SUCCESS_CHANGE_FILTER_PARAM,
} from "../actions/types";

const initialState = {
  filterParam: "recent",
};

export default function (state = initialState, action) {
  switch (action.type) {
    // by default filter parameter is by recent activity.
    case REQUEST_CHANGE_FILTER_PARAM:
      return { ...state };
    // SUCCESS_CHANGE_FILTER_PARAM sets the current filter parameter.
    case SUCCESS_CHANGE_FILTER_PARAM:
      return { ...state, filterParam: action.payload };
    default:
      return state;
  }
}
