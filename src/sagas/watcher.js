import { takeLatest, all } from "redux-saga/effects";
import {
  REQUEST_ALL_QUESTIONS,
  REQUEST_FEATURED_TOPICS,
} from "../actions/types";
import { retrieveAllQuestions } from "./questionsagas";
import { retrieveFeaturedTopics } from "./topicsagas";

export default function* watchUsers() {
  yield all([
    takeLatest(REQUEST_ALL_QUESTIONS, retrieveAllQuestions),
    takeLatest(REQUEST_FEATURED_TOPICS, retrieveFeaturedTopics),
  ]);
}
