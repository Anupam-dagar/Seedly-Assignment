import { REQUEST_CHANGE_FILTER_PARAM } from "./types";

export const filterParams = (filterType) => {
  console.log("REQUEST_CHANGE_FILTER_PARAM action received");
  return {
    type: REQUEST_CHANGE_FILTER_PARAM,
    filterParam: filterType,
  };
};
