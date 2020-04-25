import { takeLatest, all } from "redux-saga/effects";
import { REQUEST_ALL_QUESTIONS } from "../actions/types";
import { retrieveAllQuestions } from "./questionsagas";

export default function* watchUsers() {
  yield all([takeLatest(REQUEST_ALL_QUESTIONS, retrieveAllQuestions)]);
}
