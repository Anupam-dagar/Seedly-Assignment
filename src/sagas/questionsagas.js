import {
  SUCCESS_ALL_QUESTIONS,
  FAILURE_ALL_QUESTIONS,
  FAILURE_TOPIC_QUESTION,
  SUCCESS_TOPIC_QUESTION,
} from "../actions/types";
import { put, call } from "redux-saga/effects";
import { getAllQuestionsApi, getQuestionsByTopicApi } from "../api/api";

export function* retrieveAllQuestions(data) {
  try {
    const response = yield call(
      getAllQuestionsApi,
      data.trending,
      data.unanswered,
      data.query
    );

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

export function* retrieveTopicQuestions(topic) {
  try {
    const response = yield call(
      getQuestionsByTopicApi,
      topic.topic,
      topic.trending,
      topic.unanswered,
      topic.query
    );

    yield put({
      type: SUCCESS_TOPIC_QUESTION,
      payload: response,
    });
  } catch (error) {
    const errorMessage = error.message !== undefined ? error.message : error;
    yield put({
      type: FAILURE_TOPIC_QUESTION,
      error: errorMessage,
    });
  }
}
