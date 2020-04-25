import { takeLatest, all } from "redux-saga/effects";
import {
  REQUEST_ALL_QUESTIONS,
  REQUEST_FEATURED_TOPICS,
  REQUEST_TOPIC_QUESTION,
} from "../actions/types";
import { retrieveAllQuestions, retrieveTopicQuestions } from "./questionsagas";
import { retrieveFeaturedTopics } from "./topicsagas";

export default function* watchUsers() {
  yield all([
    takeLatest(REQUEST_ALL_QUESTIONS, retrieveAllQuestions),
    takeLatest(REQUEST_FEATURED_TOPICS, retrieveFeaturedTopics),
    takeLatest(REQUEST_TOPIC_QUESTION, retrieveTopicQuestions),
  ]);
}
