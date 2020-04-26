import { SUCCESS_CHANGE_FILTER_PARAM } from "../actions/types";
import { put } from "redux-saga/effects";

export function* changeFilterParam(data) {
  yield put({
    type: SUCCESS_CHANGE_FILTER_PARAM,
    payload: data.filterParam,
  });
}
