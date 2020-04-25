import { SUCCESS_ALL_QUESTIONS, FAILURE_ALL_QUESTIONS } from "../actions/types";
import { put, call } from "redux-saga/effects";
import { getAllQuestionsApi } from "../api/api";

export function* retrieveAllQuestions() {
  try {
    const response = yield call(getAllQuestionsApi);

    yield put({
      type: SUCCESS_ALL_QUESTIONS,
      payload: response,
    });
  } catch (error) {
    const errorMessage = error.message !== undefined ? error.message : error;
    yield put({
      type: FAILURE_ALL_QUESTIONS,
      error: errorMessage,
    });
  }
}
