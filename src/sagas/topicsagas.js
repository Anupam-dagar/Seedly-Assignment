import {
  SUCCESS_FEATURED_TOPICS,
  FAILURE_FEATURED_TOPICS,
} from "../actions/types";
import { put, call } from "redux-saga/effects";
import { getFeaturedTopicsApi } from "../api/api";

// make a request to get all featured topics and update the store accordingly.
export function* retrieveFeaturedTopics() {
  try {
    const response = yield call(getFeaturedTopicsApi);

    yield put({
      type: SUCCESS_FEATURED_TOPICS,
      payload: response,
    });
  } catch (error) {
    const errorMessage = error.message !== undefined ? error.message : error;
    yield put({
      type: FAILURE_FEATURED_TOPICS,
      error: errorMessage,
    });
  }
}
