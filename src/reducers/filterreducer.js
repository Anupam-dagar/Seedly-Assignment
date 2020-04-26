import {
  REQUEST_CHANGE_FILTER_PARAM,
  SUCCESS_CHANGE_FILTER_PARAM,
} from "../actions/types";

const initialState = {
  filterParam: "recent",
};

export default function (state = initialState, action) {
  switch (action.type) {
    case REQUEST_CHANGE_FILTER_PARAM:
      return { ...state };
    case SUCCESS_CHANGE_FILTER_PARAM:
      return { ...state, filterParam: action.payload };
    default:
      return state;
  }
}
